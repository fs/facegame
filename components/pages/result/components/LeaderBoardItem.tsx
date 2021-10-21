import React from 'react';
import IResultsBoard from 'interfaces/resultsBoard';
import { Avatar, FullName, Rate, WrapperTop, ScoreTop } from './styled';

interface IProps {
  user: IResultsBoard['topResults'][number];
  isCurrentUser: boolean;
  isOutsider?: boolean;
}
const LeaderBoardItem = ({ user, isCurrentUser, isOutsider = false }: IProps) => {
  return (
    <WrapperTop isCurrentUser={isCurrentUser} isOutsider={isOutsider}>
      <Rate>{`${user.rate}`}</Rate>
      <Avatar src={user.avatarUrl} alt="ava" />
      <FullName>{`${user.fullName}`} </FullName>
      <ScoreTop>{`${user.score}`} </ScoreTop>
    </WrapperTop>
  );
};

export default LeaderBoardItem;
