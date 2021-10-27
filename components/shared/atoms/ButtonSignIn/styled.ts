import styled, { css, DefaultTheme } from 'styled-components';
import { component as GoogleSvg } from 'public/images/icons/google-icon.svg';

export const customLoginButtonStyles = ({ colors, breakpoints, down }: DefaultTheme) => css`
  display: flex;
  align-items: center;
  flex: none;
  min-width: auto;
  margin: 0;
  padding: 0.75rem 2rem;
  background: ${colors.red};
  color: ${colors.white};
  border: 0;
  border-radius: 2rem;
  outline: none;
  font-size: 1.5rem;

  ${down(breakpoints.lg)} {
    padding: 0.5rem 2rem;
  }
`;

export const GoogleIcon = styled(GoogleSvg)(
  ({ theme: { breakpoints, down } }) => css`
    margin-right: 0.4rem;

    ${down(breakpoints.lg)} {
      width: 2rem;
      height: 2rem;
    }
  `,
);
