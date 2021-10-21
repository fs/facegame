import styled, { css } from 'styled-components';

interface IStyles {
  width: number;
}
export const Wrapper = styled.div(
  () => css`
    width: 100%;
    text-align: center;
  `,
);

export const Timer = styled.span(
  ({ theme: { breakpoints, down } }) => css`
    font-size: 1.5rem;
    font-weight: 700;
    ${down(breakpoints.lg)} {
      font-size: 1rem;
    }
  `,
);

export const Bar = styled.div<IStyles>(
  ({ theme: { colors, breakpoints, down }, width }) => css`
    width: ${width}%;
    height: 8px;
    border-radius: 90px;
    margin: 1rem auto;
    background-color: ${width <= 25 ? colors.red : colors.green};
    ${down(breakpoints.lg)} {
      margin: 0.5rem auto;
    }
  `,
);
