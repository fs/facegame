import React from 'react';
import styled, { css } from 'styled-components';

import { component as Exit } from 'public/images/icons/exit.svg';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const CountAnswer = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    font-size: 1.5rem;
    font-weight: 600;

    ${down(breakpoints.lg)} {
      margin-right: 1rem;
    }
  `,
);

const StarIcon = styled.img`
  width: 2.85rem;
  margin-left: 1rem;
`;

const ExitIcon = styled(Exit)(
  ({ theme: { breakpoints, down } }) => css`
    cursor: pointer;
    margin-left: 2rem;

    ${down(breakpoints.lg)} {
      width: 2rem;
    }
  `,
);

const HeaderChildren = ({
  correctAnswersCount,
}: // endGame,
{
  correctAnswersCount: number | undefined;
  // endGame: (gameId: string) => void;
}) => {
  return (
    <Wrapper>
      <CountAnswer>{correctAnswersCount}</CountAnswer>
      <StarIcon src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <ExitIcon onClick={() => {}} />
    </Wrapper>
  );
};

export default HeaderChildren;
