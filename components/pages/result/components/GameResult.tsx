import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import IResultsBoard from 'interfaces/resultsBoard';
import { component as StarIcon } from 'public/images/icons/star.svg';
import Link from 'next/link';
import { GAME } from 'config/routes';
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
      <WrapperFlexCenter>
        <Score>
          <div>Time spent</div>
          <ScoreResult>30s</ScoreResult>
        </Score>
        <Score>
          <div>Score</div>
          <ScoreResult>{score}</ScoreResult>
        </Score>
      </WrapperFlexCenter>
      <Link href={GAME} passHref>
        <ButtonedLink>Play again</ButtonedLink>
      </Link>
    </WrapperGameResult>
  );
};

export default GameResult;
