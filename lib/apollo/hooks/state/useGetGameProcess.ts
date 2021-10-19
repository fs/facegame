import { useQuery } from '@apollo/client';
import GameProcess from 'graphql/queries/cache/gameProcess.graphql';

export const useGetGameProcess = () => {
  const { data, loading, error } = useQuery(GameProcess, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  return {
    gameProcess: data?.gameProcess,
    loading,
    error,
  };
};
