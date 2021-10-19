import styled, { css } from 'styled-components';
import { component as GoogleSvg } from 'public/images/icons/google-icon.svg';

export const Title = styled.h1`
  font-size: 4.25rem;
`;

export const PageContent = styled.div(
  ({ theme: { breakpoints, between, up } }) => css`
    display: flex;

    margin: 0 auto;
    padding: 0 2rem;

    ${up(breakpoints.xl)} {
      max-width: ${breakpoints.xl}px;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      max-width: ${breakpoints.lg}px;
    }
  `,
);

export const Content = styled.div`
  position: relative;
  padding-right: 32rem;
`;

export const TagLine = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5rem;
`;

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 0.825rem;
`;

export const FacesImg = styled.img`
  position: absolute;
  right: 0;
  width: 32rem;
  event-pointer: none;
  z-index: -1;
`;

export const StarsImg = styled.img`
  position: absolute;
  left: -2rem;
  width: 74rem;
  event-pointer: none;
  z-index: -1;
`;

export const customButtonStyles = ({ colors }) => css`
  align-self: start;
  color: ${colors.red};
`;

export const customLoginButtonStyles = ({ colors }) => css`
  display: flex;
  align-items: center;
  flex: none;
  min-width: auto;
  margin: 0;
  padding: 0.75rem 3rem;
  background: ${colors.red};
  color: ${colors.white};
  border: 0;
  border-radius: 2rem;
  outline: none;
  font-size: 1.5rem;
`;

export const GoogleIcon = styled(GoogleSvg)`
  margin-right: 1rem;
`;
