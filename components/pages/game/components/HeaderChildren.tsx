import React from 'react';

import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import { useGetGameProcess } from 'lib/apollo/hooks/state/useGetGameProcess';
import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import { gameProcess } from 'lib/cache';

import { CountAnswer, ExitIcon, StarIcon } from './styled';

const HeaderChildren = () => {
  const { user } = useCurrentUser(false);
  const {
    gameProcess: { correctAnswersCount },
  } = useGetGameProcess();
  const { endGame } = useGameProcess(gameProcess);
  return user ? (
    <>
      <StarIcon src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <CountAnswer>{correctAnswersCount}</CountAnswer>
      <ExitIcon onClick={endGame} />
    </>
  ) : (
    <div />
  );
};

export default HeaderChildren;
