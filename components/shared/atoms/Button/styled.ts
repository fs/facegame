import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface ICustomStyles {
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
}

export const Button = styled.button<ICustomStyles>(
  ({ theme: { colors }, theme, customStyles }) => css`
    flex: 1 1 40%;
    min-width: 470px;
    height: 72px;
    margin: 8px;
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
    ${customStyles && customStyles(theme)}
  `,
);
