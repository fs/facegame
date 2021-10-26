import styled, { css } from 'styled-components';
import { component as GoogleSvg } from 'public/images/icons/google-icon.svg';

export const Title = styled.h1(
  ({ theme: { breakpoints, between, up, down } }) => css`
    ${up(breakpoints.xl)} {
      font-size: 4.85rem;
      line-height: 5.92rem;
    }

    ${between(breakpoints.sm, breakpoints.xl)} {
      max-width: 600px;
      font-size: 3.1rem;
      line-height: 3.8rem;
    }

    ${down(breakpoints.sm)} {
      max-width: 300px;
      margin-top: 0px;
      font-size: 2rem;
      line-height: 2.4rem;
    }
  `,
);

export const PageContent = styled.div(
  ({ theme: { breakpoints, between, up, down } }) => css`
    display: flex;
    margin: 0 auto;

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
      padding-right: 0;
    }
  `,
);

export const TagLine = styled.div(
  ({ theme: { breakpoints, between, up, down } }) => css`
    max-width: 450px;
    ${up(breakpoints.xl)} {
      font-size: 1.5rem;
      margin-bottom: 5rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    ${down(breakpoints.lg)} {
      font-size: 0.875rem;
      line-height: 1.3rem;
      margin-bottom: 2rem;
    }
  `,
);

export const Footer = styled.footer(
  ({ theme: { colors, breakpoints, down } }) => css`
    display: none;
    margin-top: auto;
    text-align: center;
    padding-top: 1.5rem;
    opacity: 0.5;
    & a {
      color: ${colors.red};
    }
    ${down(breakpoints.sm)} {
      display: block;
      font-size: 0.875rem;
      line-height: 1.3rem;
    }
  `,
);
export const Description = styled.div`
  margin-top: 1rem;
  font-size: 0.825rem;
`;

export const FacesImg = styled.img(
  ({ theme: { breakpoints, between, up, down } }) => css`
    position: absolute;
    right: 0;
    top: 0;
    pointer-events: none;
    z-index: -1;

    ${up(breakpoints.xl)} {
      width: 32rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      width: 27rem;
    }

    ${down(breakpoints.lg)} {
      position: static;
      width: 100%;
    }
  `,
);

export const StarsImg = styled.img(
  ({ theme: { breakpoints, between, up, down } }) => css`
    position: absolute;
    pointer-events: none;
    z-index: -1;
    top: 0;

    ${up(breakpoints.xl)} {
      left: -5rem;
      width: 74rem;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      left: -4rem;
      width: 63rem;
    }

    ${down(breakpoints.lg)} {
      display: none;
    }
  `,
);

export const customButtonStyles = () => css`
  display: inline-block;
  padding: 0.75rem 3rem;
`;

export const customLoginButtonStyles = ({ colors, breakpoints, down }) => css`
  display: flex;
  align-items: center;
  flex: none;
  min-width: auto;
  margin: 0;
  padding: 0.75rem 2rem;
  background: ${colors.red};
  color: ${colors.white};
  border: 0;
  border-radius: 2rem;
  outline: none;
  font-size: 1.5rem;

  ${down(breakpoints.lg)} {
    padding: 0.5rem 2rem;
  }
`;

export const GoogleIcon = styled(GoogleSvg)(
  ({ theme: { breakpoints, down } }) => css`
    margin-right: 0.4rem;

    ${down(breakpoints.lg)} {
      width: 2rem;
      height: 2rem;
    }
  `,
);
