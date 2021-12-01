import { Colors } from 'public/styles/theme';
import styled, { css, keyframes } from 'styled-components';

import Button from 'components/shared/atoms/Button';

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

export const TitleDescription = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 0.5rem;
    display: none;
    ${down(breakpoints.lg)} {
      display: block;
    }
  `,
);

export const Title = styled.h1`
  font-size: 2rem;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Content = styled.div(
  ({ theme: { up, breakpoints } }) => css`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    ${up(breakpoints.lg)} {
      width: 80%;
    }
  `,
);

interface IImgStyles {
  zIndex?: number;
  opacity?: number;
  rotate?: number;
}

export const PreviewImg = styled.img<IImgStyles>(
  ({ theme: { colors, down, between, breakpoints } }) => css`
    height: 450px;
    border-radius: 10px;
    background-color: ${colors.lightGrey};
    transform-origin: 50% 50% 0;
    animation: 1.5s ${keyframes`${fadeIn}`};

    ${between(breakpoints.sm, breakpoints.md, true)} {
      height: 330px;
    }
    ${down(breakpoints.sm, true)} {
      height: 215px;
    }
    ${down(breakpoints.sm)} {
      height: 215px;
    }
  `,
);

export const ButtonForQuestion = styled(Button)(
  ({ theme: { colors, down, breakpoints } }) => css`
    flex: 1 1 48%;
    margin: 5px;
    color: ${colors.black};
    border: 2px solid ${colors.pink};
    ${down(breakpoints.sm)} {
      padding: 0.5rem 0;
      flex: 1 1 100%;
    }
  `,
);

const getColor = (isCorrect: boolean | null, isShowCorrectResult: boolean | null): keyof typeof Colors => {
  if (isCorrect || isShowCorrectResult) {
    return 'green';
  }
  if (isCorrect === false) {
    return 'red';
  }
  return 'pink';
};
interface IButtonForAnswer {
  isCorrect: boolean | null;
  isShowCorrectAnswer: boolean | null;
}

export const ButtonForAnswer = styled(Button)<IButtonForAnswer>(
  ({ theme: { colors, down, breakpoints }, isCorrect, isShowCorrectAnswer }) => {
    const color = getColor(isCorrect, isShowCorrectAnswer);
    return css`
      flex: 1 1 40%;
      margin: 5px;
      color: ${colors[color]};
      border: 2px solid ${colors[color]};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      ${down(breakpoints.sm)} {
        padding: 0.5rem 0;
        flex: 1 1 100%;
      }
      svg {
        position: absolute;
        right: 5%;

        display: block;
        ${down(breakpoints.md)} {
          right: 0;
          max-height: 1rem;
        }
      }
    `;
  },
);
