import styled, { css } from 'styled-components';

export const WrapperCard = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    position: relative;
    border-radius: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 1rem 0;
    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `,
);

export const WrapperGameResult = styled(WrapperCard)(
  () => css`
    flex-grow: 1;
    width: 100%;
    justify-content: space-around;
  `,
);

export const WrapperPopularityRating = styled(WrapperCard)(
  ({ theme: { colors } }) => css`
    margin-top: 1rem;
    background-color: ${colors.white};
    flex-direction: row;
    width: 100%;
    padding: 0.7rem;
  `,
);
export const WrapperLeaderBoard = styled(WrapperCard)(
  () => css`
    height: 100%;
  `,
);

export const TeamDirectoryImg = styled.img(
  ({ theme: { colors } }) => css`
    height: 100px;
    width: auto;
    border-radius: 10px;
    background-color: ${colors.lightGrey};
    margin: 1rem;
    margin-right: 1.5rem;
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

export const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperFlexCenter = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    height: 430px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: -0.5em;
    > div {
      margin: 0.5em;
    }
    ${down(breakpoints.lg)} {
      height: auto;
    }
  `,
);

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
  () => css`
    display: flex;
    margin: -1em;
    > div {
      margin: 1em;
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

export const TextBold = styled.div`
  font-weight: 600;
`;

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
