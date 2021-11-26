import React from 'react';
import ImageNext from 'next/image';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import { NotifierProvider } from 'contexts/NotifierContext';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Loader from 'components/shared/atoms/Loader';
import logoIcon from 'public/images/loader-logo.gif';
import HeaderChildren from './components/HeaderChildren';
import GameProvider from './components/GameProvider';
import Game from './components/Game';

const GamePage = () => {
  // const { resetCorrectAnswersCount, resetAnswers } = useGameProcess(gameProcess);
  // useEffect(() => {
  //   resetCorrectAnswersCount();
  //   resetAnswers();
  // }, []);

  return (
    <NotifierProvider>
      <DefaultTemplate title="What is the name of that superhero?" headerChildren={<HeaderChildren />}>
        <GameProvider>
          {({ imagesState, startGameState }) => {
            if (imagesState.error || startGameState.error) {
              return null;
            }

            if (imagesState.loading || startGameState.loading) {
              return (
                <Loader testId="profile-updating-loader">
                  <ImageNext src={logoIcon} width={192} height={72} />
                </Loader>
              );
            }

            if (!startGameState.data || !imagesState.images) {
              return null;
            }

            return <Game images={imagesState.images} initialQuestion={startGameState.data.question} />;
          }}
        </GameProvider>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
