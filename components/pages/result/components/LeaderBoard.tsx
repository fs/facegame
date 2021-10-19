import React from 'react';
import IResultsBoard from 'interfaces/resultsBoard';
import { component as StarIcon } from 'public/images/icons/star.svg';
import { StarWrapperRight, Title, WrapperLeaderBoard } from './styled';
import LeaderBoardItem from './LeaderBoardItem';

const LeaderBoard = ({ topResults, currentUserResult }: IResultsBoard) => {
  const isOutsider = currentUserResult.rate >= 5;

  return (
    <WrapperLeaderBoard>
      <StarWrapperRight>
        <StarIcon width="90px" height="90px" />
      </StarWrapperRight>
      <Title>LeaderBoard</Title>
      {topResults.map((user) => {
        const isCurrentUser = user.rate === currentUserResult.rate;
        return <LeaderBoardItem key={user.rate} user={user} isCurrentUser={isCurrentUser} />;
      })}
      {isOutsider && (
        <>
          <div>...</div>
          <LeaderBoardItem user={currentUserResult} isCurrentUser isOutsider />
        </>
      )}
    </WrapperLeaderBoard>
  );
};

export default LeaderBoard;
