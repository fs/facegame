import { useMutation } from '@apollo/client';

import { useNotifier } from 'contexts/NotifierContext';
import { useCallback } from 'react';

import EndGame from 'graphql/mutations/endGame.graphql';

type EndGameProps = { gameId: string };

type EndGameData = {
  endGame: {
    score: number;
  };
};

type EndGameInputVariable = EndGameProps;

type EndGameVariables = {
  input: EndGameInputVariable;
};

const useEndGame = () => {
  const { setError } = useNotifier();

  const [mutation, endGameState] = useMutation<EndGameData, EndGameVariables>(EndGame, {
    onError: (error) => {
      if (setError) setError(error);
    },
  });

  const endGame = useCallback(
    (gameId: EndGameProps) => {
      return mutation({
        variables: { input: gameId },
      });
    },
    [mutation],
  );

  return [endGame, endGameState] as const;
};

export default useEndGame;
