import styled, { css, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface ICustomStyles {
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
}

export const Avatar = styled.img<ICustomStyles>(
  ({ theme: { colors }, theme, customStyles }) => css`
    width: 40px;
    height: 40px;
    background-color: ${colors.lightGrey};
    border-radius: 50%;
    margin-right: 0.3rem;

    ${customStyles && customStyles(theme)}
  `,
);
