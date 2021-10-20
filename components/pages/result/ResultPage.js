import React from 'react';

import { component as LogoIcon } from 'public/images/face-game-logo.svg';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import { useGetResultsBoard } from 'lib/apollo/hooks/state/useGetResultsBoard';

import { NotifierProvider } from 'contexts/NotifierContext';

import Loader from 'components/shared/atoms/Loader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import HeaderChildrenResult from './components/HeaderChildren';
import GameResult from './components/GameResult';
import LeaderBoard from './components/LeaderBoard';

import { WrapperFlexCenter } from './components/styled';

const ResultPage = () => {
  const { topResults, currentUserResult, loading } = useGetResultsBoard();

  return (
    <NotifierProvider>
      <DefaultTemplate headerChildren={<HeaderChildrenResult />}>
        {loading && (
          <Loader testId="profile-updating-loader">
            <LogoIcon />
          </Loader>
        )}
        <WrapperFlexCenter>
          {!loading && currentUserResult && <GameResult currentUserResult={currentUserResult} />}
          {!loading && topResults && <LeaderBoard topResults={topResults} currentUserResult={currentUserResult} />}
        </WrapperFlexCenter>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(ResultPage)));
