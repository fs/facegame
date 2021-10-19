import React from 'react';
import { component as ExitIcon } from 'public/images/icons/exit.svg';
import { component as StarIcon } from 'public/images/icons/star.svg';

import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import { useGetGameProcess } from 'lib/apollo/hooks/state/useGetGameProcess';
import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import { gameProcess } from 'lib/cache';

import { CountAnswer, HoverIcon } from './styled';

const HeaderChildren = () => {
  const { user } = useCurrentUser(false);
  const {
    gameProcess: { correctAnswersCount },
  } = useGetGameProcess();
  const { endGame } = useGameProcess(gameProcess);
  return (
    !!user && (
      <>
        <StarIcon />
        <CountAnswer>{correctAnswersCount}</CountAnswer>
        <HoverIcon onClick={endGame}>
          <ExitIcon />
        </HoverIcon>
      </>
    )
  );
};

export default HeaderChildren;
