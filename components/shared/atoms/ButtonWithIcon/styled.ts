import styled, { css } from 'styled-components';

export const Text = styled.span`
  padding: 0.6rem;
`;
export const Icon = styled.div`
  padding: 0.6rem;
  border-radius: 2px;
`;
interface IStyles {
  customStyles?: string;
}

export const ButtonWrapper = styled.button<IStyles>(
  ({ theme: { colors }, customStyles }) => css`
    background-color: ${colors.white};
    display: inline-flex;
    align-self: flex-start;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
    padding: 0px;
    border-radius: 2px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
    width: auto;
    :active {
      background-color: ${colors.lightGrey};
    }
    ${customStyles}
  `,
);
