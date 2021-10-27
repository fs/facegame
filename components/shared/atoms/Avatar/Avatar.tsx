import React, { useState } from 'react';
import { Avatar } from './styled';

type TAvatar = {
  src: string;
  alt: string;
};

const AvatarWithFallback = ({ src, alt }: TAvatar) => {
  const [tryCount, setTryCount] = useState(0);
  const replaceImgWithError = (e: any) => {
    e.target.onerror = null;
    e.target.src = `${process.env.ASSET_HOST}/images/default-person.png`;
    if (tryCount >= 3) {
      e.target.src = `${process.env.ASSET_HOST}/images/default-person.png`;
      return;
    }
    setTryCount((prevTryCount) => prevTryCount + 1);
    e.target.src = src;
  };

  return <Avatar onError={replaceImgWithError} alt={alt} src={src} />;
};

export default AvatarWithFallback;
