import React, { useEffect } from 'react';

import { component as LogoIcon } from 'public/images/face-game-logo.svg';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import { gameProcess } from 'lib/cache';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';

import { NotifierProvider } from 'contexts/NotifierContext';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Loader from 'components/shared/atoms/Loader';

import { LIMIT_QUESTIONS } from './components/constants';
import GamePage from './components/GamePage';
import HeaderChildren from './components/HeaderChildren';

const Game = () => {
  const { questions, loading } = useGameQuestions({
    limitQuestions: LIMIT_QUESTIONS,
  });

  const { resetCorrectAnswersCount, resetAnswers } = useGameProcess(gameProcess);
  useEffect(() => {
    resetCorrectAnswersCount();
    resetAnswers();
  }, []);

  return (
    <NotifierProvider>
      <DefaultTemplate title="What is the name of that superhero?" headerChildren={<HeaderChildren />}>
        {loading && (
          <Loader testId="profile-updating-loader">
            <LogoIcon />
          </Loader>
        )}
        {!loading && <GamePage questions={questions} />}
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(Game)));
