import { Colors } from 'public/styles/theme';
import styled, { css } from 'styled-components';
import Button from 'components/shared/atoms/Button';

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Timer = styled.h2`
  font-size: 1.5rem;
`;

export const Portret = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 5%;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ImgGroup = styled.div`
  position: relative;
  left: 0%;
  height: 400px;
  width: 280px;
`;

interface ITimeBar {
  width: number;
}

export const TimeBar = styled.div<ITimeBar>(
  ({ width }) => css`
    width: ${width}px;
    height: 8px;
    border-radius: 90px;
    background-color: ${({ theme: { colors } }) => colors.red};
  `,
);
interface IImgStyles {
  zIndex?: number;
  opacity?: number;
  rotate?: number;
}

export const PreviewImg = styled.img<IImgStyles>(
  ({ zIndex = 1, opacity = 1, rotate = 0 }) => css`
    position: absolute;
    width: 280px;
    height: 364px;
    z-index: ${zIndex};
    border-radius: 10px;
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    opacity: ${opacity};
    transform: rotate(${rotate}deg);
    transform-origin: 50% 50% 0;
  `,
);

export const ButtonForQuestion = styled(Button)(
  ({ theme: { colors } }) => css`
    color: ${colors.black};
    border: none;
    &:hover {
      border: 2px solid ${colors.black};
    }
  `,
);

const getColor = (isCorrect: boolean, isMatchSelected: boolean): keyof typeof Colors => {
  if (isCorrect) {
    return 'green';
  }
  if (!isCorrect && isMatchSelected) {
    return 'red';
  }
  return 'lightGrey';
};
interface IButtonForAnswer {
  isCorrect: boolean;
  isMatchSelected: boolean;
}

export const ButtonForAnswer = styled(Button)<IButtonForAnswer>(({ theme: { colors }, isCorrect, isMatchSelected }) => {
  const color = getColor(isCorrect, isMatchSelected);
  return css`
    color: ${colors[color]};
    border: 2px solid ${colors[color]};
    background-color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      right: 5%;
      display: ${isCorrect || isMatchSelected ? 'block' : 'none'};
    }
  `;
});

export const CountAnswer = styled.div`
  margin-left: 16px;
  margin-right: 48px;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HoverIcon = styled.div`
  cursor: pointer;
`;
