import { useMutation } from '@apollo/client';
import type { MutationResult } from '@apollo/client';
import StartGame from 'graphql/mutations/startGame.graphql';

import { useNotifier } from 'contexts/NotifierContext';
import { useEffect } from 'react';

export type Question = {
  answerOptions: string;
  avatarUrl: string;
};

type StartGameData = {
  gameId: string;
  question: Question;
};

const useStartGame = (): [() => void, MutationResult<StartGameData>] => {
  const { setError } = useNotifier();
  const [startGame, startGameState] = useMutation<StartGameData>(StartGame);
  useEffect(() => {
    if (startGameState.error) {
      setError(startGameState.error);
    }
  }, [startGameState.error, setError]);

  return [startGame, startGameState];
};

export default useStartGame;
