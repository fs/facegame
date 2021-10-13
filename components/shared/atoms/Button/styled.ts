import styled, { css } from 'styled-components';

interface ICustomStyles {
  customStyles?: string;
}

export const Button = styled.button<ICustomStyles>(
  ({ theme: { colors }, customStyles }) => css`
    flex: 1 1 40%;
    min-width: 470px;
    height: 72px;
    margin: 8px;
    border-radius: 90px;
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
    ${customStyles}
  `,
);
