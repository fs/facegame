import React from 'react';
import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';
import { useGetResultsBoard } from 'lib/apollo/hooks/state/useGetResultsBoard';
import HeaderChildrenResult from './components/HeaderChildren';
import GameResult from './components/GameResult';
import LeaderBoard from './components/LeaderBoard';
import { WrapperFlexCenter } from './components/styled';

const ResultPage = () => {
  const { topResults, currentUserResult, loading } = useGetResultsBoard();

  return (
    <NotifierProvider>
      <DefaultTemplate headerChildren={<HeaderChildrenResult />}>
        {loading && <>Грузим...Загружаем...</>}
        <WrapperFlexCenter>
          {!loading && currentUserResult && <GameResult currentUserResult={currentUserResult} />}
          {!loading && topResults && <LeaderBoard topResults={topResults} currentUserResult={currentUserResult} />}
        </WrapperFlexCenter>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(ResultPage)));
