import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
`;

export const customButtonStyles = () => css`
  align-self: start;
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
export const Oranization = styled.div`
  font-size: 2rem;
  margin-bottom: 5rem;
`;
export const TagLine = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5rem;
`;
export const Description = styled.div`
  margin-top: 2rem;
  font-size: 0.7rem;
`;
export const ImgGroup = styled.div`
  position: relative;
  width: 580px;
  padding-left: 4rem;
`;

export const PreviewImg = styled.img`
  position: absolute;
  width: 280px;
  height: 364px;
  z-index: ${({ zIndex = 1 }) => zIndex};
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  opacity: ${({ opacity = 1 }) => opacity};
  transform: rotate(${({ rotate = 0 }) => rotate}deg);
  transform-origin: 50% 100% 0;
`;
