import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Images from 'graphql/queries/images.graphql';
import Image from 'domain/Image';
import { useNotifier } from 'contexts/NotifierContext';

type ImagesData = {
  images: Image[];
};

const warmUpBrowserCache = (data: Image[]) => {
  const promises = data.map((url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      img.src = url;
    });
  });
  return Promise.allSettled(promises);
};

export const useGameImages = () => {
  const { setError } = useNotifier();
  const [isCached, setIsCached] = useState(false);
  const { data, loading, error } = useQuery<ImagesData>(Images, {
    onCompleted: async (response) => {
      await warmUpBrowserCache(response.images.slice(0, 2));
      await warmUpBrowserCache(response.images);
      setIsCached(true);
      await warmUpBrowserCache(response.images.slice(2, 5));
      await warmUpBrowserCache(response.images.slice(5));
    },
    onError: (err) => {
      setError(err);
    },
  });

  return {
    images: !loading && !error && isCached ? data?.images : undefined,
    loading: (loading || !isCached) && !error,
    error,
  };
};
