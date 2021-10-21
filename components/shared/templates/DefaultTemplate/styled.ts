import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const PageContent = styled.div(
  ({ theme: { breakpoints } }) =>
    css`
      padding: 1rem 2rem;
      width: 100%;
      max-width: ${breakpoints.xl}px;
    `,
);
