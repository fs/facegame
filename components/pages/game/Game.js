import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import { NotifierProvider } from 'contexts/NotifierContext';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import { LIMIT_QUESTIONS } from './components/constants';

import GamePage from './components/GamePage';

const Game = () => {
  const { questions, loading } = useGameQuestions({ limitQuestions: LIMIT_QUESTIONS });

  return (
    <NotifierProvider>
      <DefaultTemplate>{!loading && <GamePage questions={questions} />}</DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(Game)));
