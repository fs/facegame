import React from 'react';
import Link from 'next/link';

import IResultsBoard from 'domain/ResultsBoard';
import { GAME } from 'config/routes';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';

import {
  Count,
  Score,
  ScoreResult,
  StarWrapperLeft,
  Title,
  WrapperGameResult,
  WrapperPosition,
  StarIcon,
  WrapperFlex,
} from './styled';

const GameResult = ({ currentUserResult }: IResultsBoard) => {
  const { correctAnswersCount, questionsCount, score } = currentUserResult;

  return (
    <WrapperGameResult>
      <StarWrapperLeft src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <Title>Game result</Title>
      <WrapperPosition>
        <WrapperFlex>
          <StarIcon src={`${process.env.ASSET_HOST}/images/icons/star.png`} />{' '}
          <Count>{`${correctAnswersCount}/${questionsCount}`}</Count>
        </WrapperFlex>
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
