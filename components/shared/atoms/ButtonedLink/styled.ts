import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface ICustomStyles {
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
}

export const ButtonWrapper = styled.a<ICustomStyles>(
  ({ theme: { colors, down, breakpoints }, theme, customStyles }) => css`
    background-color: ${colors.red};
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    padding: 0.8rem 3rem;
    border-radius: 90px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    :active {
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
