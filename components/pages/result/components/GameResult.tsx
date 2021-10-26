import React from 'react';
import Link from 'next/link';

import IResultsBoard from 'interfaces/resultsBoard';
import { GAME } from 'config/routes';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';

import {
  Count,
  Score,
  ScoreResult,
  StarWrapperLeft,
  Title,
  WrapperFlexCenter,
  WrapperGameResult,
  WrapperPosition,
  StarIcon,
} from './styled';

const GameResult = ({ currentUserResult }: IResultsBoard) => {
  const { correctAnswersCount, questionsCount, score } = currentUserResult;

  return (
    <WrapperGameResult>
      <StarWrapperLeft src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <Title>Game result</Title>
      <WrapperPosition>
        <WrapperFlexCenter>
          <StarIcon src={`${process.env.ASSET_HOST}/images/icons/star.png`} />{' '}
          <Count>{`${correctAnswersCount}/${questionsCount}`}</Count>
        </WrapperFlexCenter>
        <Score>
          <div>Score</div>
          <ScoreResult>{score}</ScoreResult>
        </Score>
      </WrapperPosition>

      <Link href={GAME} passHref>
        <ButtonedLink>Play again</ButtonedLink>
      </Link>
    </WrapperGameResult>
  );
};

export default GameResult;
