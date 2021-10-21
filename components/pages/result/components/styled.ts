import styled, { css } from 'styled-components';

const WrapperCard = styled.div`
  position: relative;
  min-width: 600px;
  min-height: 450px;
  border-radius: 40px;
  margin: 25px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
export const WrapperGameResult = styled(WrapperCard)`
  padding: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperLeaderBoard = styled(WrapperCard)`
  padding: 50px 0px;
  align-items: center;
  justify-content: start;
`;

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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.8rem;
`;
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
  ({ theme: { colors } }) => css`
    background-color: ${colors.lightYellow};
    padding: 4px 24px;
    margin-top: 8px;
    border-radius: 90px;
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
  width: 2rem;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  background-color: white;
  border-radius: 50%;
`;

interface IWrapperTop {
  isCurrentUser: boolean;
  isOutsider: boolean;
}

export const WrapperTop = styled.div<IWrapperTop>(
  ({ theme: { colors }, isCurrentUser, isOutsider }) => css`
    padding: 0 50px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${isCurrentUser ? colors.lightYellow : 'none'};
    color: ${isOutsider ? colors.red : 'none'};
  `,
);

interface IHoverIcon {
  onClick: any;
}
export const HoverIcon = styled.div<IHoverIcon>`
  cursor: pointer;
`;
