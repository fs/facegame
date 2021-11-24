import React from 'react';

import { CountAnswer, ExitIcon, StarIcon } from './styled';

const HeaderChildren = ({ correctAnswersCount }: { correctAnswersCount: number | undefined }) => {
  // const { endGame } = useGameProcess(gameProcess);
  return (
    <>
      <StarIcon src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <CountAnswer>{correctAnswersCount}</CountAnswer>
      <ExitIcon onClick={() => {}} />
    </>
  );
};

export default HeaderChildren;
