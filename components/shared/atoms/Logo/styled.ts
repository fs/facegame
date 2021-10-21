import { component as Logo } from 'public/images/face-game-logo.svg';
import styled, { css } from 'styled-components';

export const LogoIcon = styled(Logo)(
  ({ theme: { breakpoints, down } }) => css`
    ${down(breakpoints.sm)} {
      width: 5rem;
    }
  `,
);
