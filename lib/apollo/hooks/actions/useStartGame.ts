import { useMutation } from '@apollo/client';
import type { MutationResult } from '@apollo/client';
import StartGame from 'graphql/mutations/startGame.graphql';

import { useNotifier } from 'contexts/NotifierContext';
import { useEffect } from 'react';

type StartGameData = {
  gameId: string;
  // question: '';
};

const useStartGame = (): [() => void, MutationResult<StartGameData>] => {
  const [startGame, startGameState] = useMutation<StartGameData>(StartGame);
  const { setError } = useNotifier();

  useEffect(() => {
    if (startGameState.error) {
      setError(startGameState.error);
    }
  }, [startGameState.error, setError]);

  return [startGame, startGameState];
};

export default useStartGame;
