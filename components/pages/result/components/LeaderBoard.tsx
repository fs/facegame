import React from 'react';

import IResultsBoard from 'domain/ResultsBoard';

import LeaderBoardItem from './LeaderBoardItem';
import { StarWrapperRight, Title, WrapperLeaderBoard } from './styled';

const LeaderBoard = ({ topResults, currentUserResult }: IResultsBoard) => {
  const rate = currentUserResult?.rate || -1;
  const isOutsider = rate >= 6;
  const isShowSpacer = rate > 6;
  return (
    <WrapperLeaderBoard>
      <StarWrapperRight src={`${process.env.ASSET_HOST}/images/icons/star.png`} />
      <Title>LeaderBoard</Title>
      {topResults.map((user) => {
        const isCurrentUser = user.rate === rate;
        return <LeaderBoardItem key={user.rate} user={user} isCurrentUser={isCurrentUser} />;
      })}
      {isOutsider && (
        <>
          {isShowSpacer && <div>...</div>}
          <LeaderBoardItem user={currentUserResult} isCurrentUser isOutsider />
        </>
      )}
    </WrapperLeaderBoard>
  );
};

export default LeaderBoard;
