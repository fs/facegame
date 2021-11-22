import { useQuery } from '@apollo/client';
import Images from 'graphql/queries/images.graphql';
import Image from 'domain/Image';

type ImagesData = Image[];

export const useGameImages = ({ prefetch = true, onCompleted }: { prefetch: boolean; onCompleted: () => void }) => {
  const { data, loading, error } = useQuery<ImagesData>(Images, {
    fetchPolicy: prefetch ? 'cache-first' : 'cache-only',
    onCompleted,
  });

  return {
    images: data,
    loadingImages: loading,
    error,
  };
};
