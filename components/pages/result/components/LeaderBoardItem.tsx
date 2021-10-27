import React from 'react';
import Avatar from 'components/shared/atoms/Avatar';
import IResultsBoard from 'interfaces/resultsBoard';
import { FullName, Rate, WrapperTop, ScoreTop, Trophy } from './styled';

interface IProps {
  user: IResultsBoard['topResults'][number];
  isCurrentUser: boolean;
  isOutsider?: boolean;
}
const LeaderBoardItem = ({ user, isCurrentUser, isOutsider = false }: IProps) => {
  return (
    <WrapperTop isCurrentUser={isCurrentUser} isOutsider={isOutsider}>
      {user.rate === 1 ? (
        <Trophy src={`${process.env.ASSET_HOST}/images/icons/trophy.png`} />
      ) : (
        <Rate>{`${user.rate}`}</Rate>
      )}
      <Avatar src={user.avatarUrl} alt="ava" />
      <FullName>{`${user.fullName}`} </FullName>
      <ScoreTop>{`${user.score}`} </ScoreTop>
    </WrapperTop>
  );
};

export default LeaderBoardItem;
