import React from 'react';
import ImageNext from 'next/image';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import { HOME } from 'config/routes';

import { NotifierProvider } from 'contexts/NotifierContext';
import Loader from 'components/shared/atoms/Loader';
import logoIcon from 'public/images/loader-logo.gif';
import GameProvider from './components/GameProvider';
import Game from './components/Game';

type Context = {
  res: any;
  req: any;
};

const GamePage = () => {
  return (
    <NotifierProvider>
      <GameProvider>
        {({ startGameState }) => {
          if (startGameState.error) {
            return null;
          }

          if (startGameState.loading) {
            return (
              <Loader testId="profile-updating-loader">
                <ImageNext src={logoIcon} width={192} height={72} />
              </Loader>
            );
          }

          if (!startGameState.data) {
            return null;
          }

          if (!startGameState.data.startGame.question) {
            return <div>No questions</div>;
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

GamePage.getInitialProps = async (context: Context) => {
  const { req, res } = context;

  if (!!req && !!res) {
    res.redirect(302, HOME);
  }
  return {};
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
