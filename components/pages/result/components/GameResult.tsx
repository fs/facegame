import React from 'react';
import Link from 'next/link';

import IResultsBoard from 'interfaces/resultsBoard';
import { GAME } from 'config/routes';
import { component as StarIcon } from 'public/images/icons/star.svg';

import ButtonedLink from 'components/shared/atoms/ButtonedLink';

import { Count, Score, ScoreResult, StarWrapperLeft, Title, WrapperFlexCenter, WrapperGameResult } from './styled';

const GameResult = ({ currentUserResult }: IResultsBoard) => {
  const { correctAnswersCount, questionsCount, score } = currentUserResult;

  return (
    <WrapperGameResult>
      <StarWrapperLeft>
        <StarIcon width="90px" height="90px" />
      </StarWrapperLeft>
      <Title>Game result</Title>
      <WrapperFlexCenter>
        <StarIcon /> <Count>{`${correctAnswersCount}/${questionsCount}`}</Count>
      </WrapperFlexCenter>
      <Score>
        <div>Score</div>
        <ScoreResult>{score}</ScoreResult>
      </Score>
      <Link href={GAME} passHref>
        <ButtonedLink>Play again</ButtonedLink>
      </Link>
    </WrapperGameResult>
  );
};

export default GameResult;
