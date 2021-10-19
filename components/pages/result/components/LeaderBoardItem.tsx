import React from 'react';
import IResultsBoard from 'interfaces/resultsBoard';
import { Avatar, FullName, Rate, WrapperTop } from './styled';

interface IProps {
  user: IResultsBoard['topResults'][number];
  isCurrentUser: boolean;
  isOutsider?: boolean;
}
const LeaderBoardItem = ({ user, isCurrentUser, isOutsider = false }: IProps) => {
  return (
    <WrapperTop isCurrentUser={isCurrentUser} isOutsider={isOutsider}>
      <Rate>{`${user.rate}`}</Rate>
      <Avatar />
      <FullName>{`${user.fullName}`} </FullName>
      <div>{`${user.score}`} </div>
    </WrapperTop>
  );
};

export default LeaderBoardItem;
