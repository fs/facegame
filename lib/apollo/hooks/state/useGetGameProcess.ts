import { useQuery } from '@apollo/client';
import GameProcess from 'graphql/queries/cache/gameProcess.graphql';

export const useGetGameProcess = () => {
  const { data, loading, error } = useQuery(GameProcess);
  return {
    gameProcess: data?.gameProcess,
    loading,
    error,
  };
};
