import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header(
  ({ theme: { colors, breakpoints, up, between } }) => css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    padding: 1rem 2rem;
    z-index: 5;
    border-bottom: 1px solid ${colors.lightGrey};
    background-color: ${colors.pink};

    ${up(breakpoints.xl)} {
      max-width: ${breakpoints.xl}px;
    }

    ${between(breakpoints.lg, breakpoints.xl)} {
      max-width: ${breakpoints.lg}px;
    }
  `,
);

export const Title = styled.span(
  ({ theme: { breakpoints, down } }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;

    ${down(breakpoints.lg)} {
      display: none;
    }
  `,
);

export const Links = styled.div`
  display: flex;
  align-items: center;
`;
