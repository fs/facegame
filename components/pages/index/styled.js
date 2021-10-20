import styled, { css } from 'styled-components';
import { component as GoogleSvg } from 'public/images/icons/google-icon.svg';

export const Title = styled.h1(
  ({ theme: { breakpoints, between, up, down } }) => css`
    ${up(breakpoints.xl)} {
      font-size: 4.2rem;
      line-height: 5rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      font-size: 3.1rem;
      line-height: 3.8rem;
    }

    ${down(breakpoints.lg)} {
      font-size: 4.25rem;
      line-height: 5rem;
    }
  `,
);

export const PageContent = styled.div(
  ({ theme: { breakpoints, between, up, down } }) => css`
    display: flex;
    margin: 0 auto;
    padding: 0 2rem;

    ${up(breakpoints.xl)} {
      max-width: ${breakpoints.xl}px;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      max-width: ${breakpoints.lg}px;
    }

    ${down(breakpoints.lg)} {
      max-width: 100%;
    }
  `,
);

export const Content = styled.div(
  ({ theme: { breakpoints, between, up, down } }) => css`
    position: relative;

    ${up(breakpoints.xl)} {
      padding-right: 32rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      padding-right: 27rem;
    }

    ${down(breakpoints.lg)} {
      padding-right: 23rem;
    }
  `,
);

export const TagLine = styled.div(
  ({ theme: { breakpoints, between, up, down } }) => css`
    ${up(breakpoints.xl)} {
      font-size: 1.5rem;
      margin-bottom: 5rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    ${down(breakpoints.lg)} {
      font-size: 1rem;
      margin-bottom: 3rem;
    }
  `,
);

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 0.825rem;
`;

export const FacesImg = styled.img(
  ({ theme: { breakpoints, between, up, down } }) => css`
    position: absolute;
    right: 0;
    pointer-events: none;
    z-index: -1;

    ${up(breakpoints.xl)} {
      width: 32rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      width: 27rem;
    }

    ${down(breakpoints.lg)} {
      width: 23rem;
    }
  `,
);

export const StarsImg = styled.img(
  ({ theme: { breakpoints, between, up, down } }) => css`
    position: absolute;
    pointer-events: none;
    z-index: -1;

    ${up(breakpoints.xl)} {
      left: -5rem;
      width: 74rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      left: -4rem;
      width: 63rem;
    }

    ${down(breakpoints.lg)} {
      left: -2rem;
      width: 56rem;
    }
  `,
);

export const customButtonStyles = () => css`
  display: inline-block;
  padding: 0.75rem 3rem;
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
