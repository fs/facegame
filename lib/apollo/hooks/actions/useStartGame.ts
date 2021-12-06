import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import type { MutationResult } from '@apollo/client';
import StartGame from 'graphql/mutations/startGame.graphql';
import Question from 'domain/Question';
import PendingQuestion from 'domain/PendingQuestion';

import { useNotifier } from 'contexts/NotifierContext';
import warmUpBrowserCache from 'lib/warmUpBrowserCache';

type StartGameData = {
  startGame: { gameId: string; question: Question; pendingQuestion: PendingQuestion };
};

const useStartGame = (): [() => void, MutationResult<StartGameData>] => {
  const { setError } = useNotifier();
  const [startGame, startGameState] = useMutation<StartGameData>(StartGame, {
    onCompleted: async (response) => {
      await warmUpBrowserCache(response.startGame.pendingQuestion.avatarUrl);
    },
  });
  useEffect(() => {
    if (startGameState.error) {
      setError(startGameState.error);
    }
  }, [startGameState.error, setError]);
  return [startGame, startGameState];
};

export default useStartGame;
