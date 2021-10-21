import styled, { css } from 'styled-components';

export const WrapperCard = styled.div(
  () => css`
    position: relative;
    flex: 1 1 45%;
    min-height: 450px;
    border-radius: 40px;
    margin: 1rem auto 0 auto;
    padding: 3rem 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
);

export const WrapperGameResult = styled(WrapperCard)(
  () => css`
    justify-content: space-between;
  `,
);

export const WrapperLeaderBoard = styled(WrapperCard)(
  ({ theme: { breakpoints, down } }) => css`
    overflow: hidden;
    justify-content: start;
    ${down(breakpoints.lg)} {
      min-height: 400px;
      flex: 1 1 100%;
      margin: 1rem -2rem 0 -2rem;
    }
  `,
);
export const Title = styled.h1`
  font-size: 2rem;
`;
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
  gap: 2rem;
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
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Score = styled.div`
  font-size: 1.5rem;
  margin: 0px 40px;
  text-align: center;
`;

export const ScoreResult = styled.div(
  () => css`
    padding: 4px 24px;
    margin-top: 8px;
    border-radius: 90px;
    text-align: center;
  `,
);

export const StarWrapperLeft = styled.div`
  position: absolute;
  left: -3rem;
  top: 3rem;
  transform: rotate(-15deg);
`;

export const StarWrapperRight = styled.div`
  position: absolute;
  right: -2.5rem;
  top: -1.5rem;
  transform: rotate(-30deg);
`;

export const FullName = styled.div`
  flex-grow: 1;
`;
export const Rate = styled.div`
  min-width: 1rem;
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
    padding: 0 3rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: ${isCurrentUser ? 'bold' : 'normal'};
    ${down(breakpoints.lg)} {
      padding: 0 1rem;
    }
  `,
);

interface IHoverIcon {
  onClick: any;
}
export const HoverIcon = styled.div<IHoverIcon>`
  cursor: pointer;
`;
