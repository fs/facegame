import { Colors } from 'public/styles/theme';
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
`;

export const PageContent = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgGroup = styled.div`
  position: relative;
  width: 580px;
  padding-left: 4rem;
`;
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
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    opacity: ${opacity};
    transform: rotate(${rotate}deg);
    transform-origin: 50% 100% 0;
  `,
);
interface IStyles {
  customStyles?: string;
  color: Colors | '';
}

export const Button = styled.button<IStyles>(
  ({ color, customStyles }) => css`
    background-color: ${color};
    ${customStyles}
  `,
);
