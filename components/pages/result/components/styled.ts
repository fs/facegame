import styled, { css } from 'styled-components';

export const WrapperCard = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    position: relative;
    flex: 1 1 45%;
    min-height: 480px;
    border-radius: 40px;
    margin: 1rem auto 0 auto;
    padding: 3rem 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${down(breakpoints.lg)} {
      padding: 1rem 0px;
      margin: 0rem auto 0 auto;
      min-height: 200px;
    }
  `,
);

export const StarIcon = styled.img(
  () => css`
    width: 2.85rem;
  `,
);

export const Trophy = styled.img(
  () => css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.25rem;
  `,
);

export const WrapperGameResult = styled(WrapperCard)(
  () => css`
    justify-content: space-between;
  `,
);

export const WrapperLeaderBoard = styled(WrapperCard)(
  ({ theme: { breakpoints, down } }) => css`
    justify-content: start;
    ${down(breakpoints.lg)} {
      min-height: auto;
      flex: 1 1 100%;
    }
  `,
);

export const Title = styled.h1(
  ({ theme: { breakpoints, down } }) => css`
    font-size: 2rem;
    ${down(breakpoints.lg)} {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `,
);

export const FullNameInfo = styled.div`
  margin-bottom: auto;
  font-weight: 600;
`;

export const EmailInfo = styled.div`
  font-size: 0.8rem;
`;

export const WrapperFlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: -0.5em;
  > * {
    margin: 0.5em;
  }
`;

export const InfoColumn = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    display: flex;
    flex-direction: column;
    margin-right: 0.8rem;
    ${down(breakpoints.lg)} {
      display: none;
    }
  `,
);

export const Count = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const WrapperPosition = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    display: block;
    ${down(breakpoints.lg)} {
      display: flex;
      margin: -1em;
      > * {
        margin: 1em;
      }
    }
  `,
);

export const Score = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
    ${down(breakpoints.lg)} {
      display: flex;
      align-items: center;
    }
  `,
);

export const ScoreResult = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    padding: 4px 24px;
    border-radius: 90px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    ${down(breakpoints.sm)} {
      padding: 4px 4px 4px 10px;
    }
  `,
);

export const StarWrapperLeft = styled(StarIcon)(
  ({ theme: { breakpoints, down } }) => css`
    position: absolute;
    left: -3rem;
    top: 3rem;
    transform: rotate(-15deg);
    width: 90px;
    height: 90px;
    ${down(breakpoints.lg)} {
      display: none;
    }
  `,
);

export const StarWrapperRight = styled(StarIcon)(
  ({ theme: { breakpoints, down } }) => css`
    position: absolute;
    right: -2.5rem;
    top: -1.5rem;
    transform: rotate(30deg);
    width: 90px !important;
    height: 90px;
    ${down(breakpoints.lg)} {
      display: none;
    }
  `,
);

export const FullName = styled.div`
  flex-grow: 1;
`;
export const Rate = styled.div`
  min-width: 2rem;
  text-align: center;
`;

export const ScoreTop = styled.div`
  margin-left: 1rem;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-right: 0.3rem;
`;

interface IWrapperTop {
  isCurrentUser: boolean;
  isOutsider: boolean;
}

export const WrapperTop = styled.div<IWrapperTop>(
  ({ theme: { breakpoints, down }, isCurrentUser }) => css`
    padding: 0.2rem 3rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: ${isCurrentUser ? 'bold' : 'normal'};
    ${down(breakpoints.lg)} {
      padding: 0.1rem 1rem;
    }
  `,
);

interface IHoverIcon {
  onClick: any;
}
export const HoverIcon = styled.div<IHoverIcon>`
  cursor: pointer;
`;
