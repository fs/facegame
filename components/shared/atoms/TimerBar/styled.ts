import styled, { css } from 'styled-components';

interface IStyles {
  width: number;
}

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Bar = styled.div<IStyles>(
  ({ theme: { colors }, width }) => css`
    width: ${width}%;
    height: 8px;
    border-radius: 90px;
    margin: 1rem auto;
    background-color: ${width <= 25 ? colors.red : colors.green};
  `,
);
