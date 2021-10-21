import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface ICustomStyles {
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
}

export const Button = styled.button<ICustomStyles>(
  ({ theme: { colors, down, breakpoints }, theme, customStyles }) => css`
    height: 4.5rem;
    border-radius: 90px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    background-color: ${colors.white};
    &:active {
      position: relative;
      top: 0.1em;
      left: 0.1em;
    }

    ${down(breakpoints.sm)} {
      font-size: 1rem;
      line-height: 1.2rem;
      height: auto;
    }

    ${customStyles && customStyles(theme)}
  `,
);
