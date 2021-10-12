import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';
import GamePage from './components/GamePage';

const Game = () => {
  return (
    <NotifierProvider>
      <DefaultTemplate>
        <GamePage />
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(Game)));
