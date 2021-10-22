import { useQuery } from '@apollo/client';
import GameProcess from 'graphql/queries/cache/gameProcess.graphql';
import { gameProcessInitialValue } from 'lib/cache';

export const useGetGameProcess = () => {
  const { data, loading, error } = useQuery(GameProcess, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  return {
    gameProcess: data?.gameProcess || gameProcessInitialValue,
    loading,
    error,
  };
};
