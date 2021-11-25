import React from 'react';
import ImageNext from 'next/image';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import { NotifierProvider } from 'contexts/NotifierContext';
import Loader from 'components/shared/atoms/Loader';
import logoIcon from 'public/images/loader-logo.gif';
import GameProvider from './components/GameProvider';
import Game from './components/Game';

const GamePage = () => {
  return (
    <NotifierProvider>
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

          if (!startGameState.data.startGame.question) {
            return <div>Нет вопросов</div>;
          }

          return (
            <Game
              initialQuestion={startGameState.data.startGame.question}
              gameId={startGameState.data.startGame.gameId}
            />
          );
        }}
      </GameProvider>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
