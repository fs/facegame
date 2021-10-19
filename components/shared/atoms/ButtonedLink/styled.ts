import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

export const Text = styled.div`
  padding: 0.6rem;
`;
interface ICustomStyles {
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
}

export const ButtonWrapper = styled.a<ICustomStyles>(
  ({ theme: { colors }, theme, customStyles }) => css`
    background-color: ${colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    padding: 0.8rem 3rem;
    border-radius: 90px;
    font-weight: 600;
    font-size: 1.5rem;
    :active {
      opacity: 0.5;
    }
    ${customStyles && customStyles(theme)}
  `,
);
