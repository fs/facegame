import styled, { css } from 'styled-components';

export const Text = styled.div`
  padding: 0.6rem;
`;
interface IStyles {
  customStyles?: string;
}

export const ButtonWrapper = styled.a<IStyles>(
  ({ theme: { colors }, customStyles }) => css`
    background-color: ${colors.white};
    border: 1px solid ${colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.darkGrey};
    width: 200px;
    height: 60px;
    :active {
      background-color: ${colors.lightGrey};
    }
    ${customStyles}
  `,
);
