import { ApolloError, useQuery } from '@apollo/client';
import ResultsBoard from 'graphql/queries/pages/resultsBoard.graphql';
import IResultsBoard from 'interfaces/resultsBoard';

interface IUseGetResultsBoard {
  topResults: IResultsBoard['topResults'];
  currentUserResult: IResultsBoard['currentUserResult'];
  loading: boolean;
  error: ApolloError | undefined;
}

export const useGetResultsBoard = (): IUseGetResultsBoard => {
  const { data, loading, error } = useQuery(ResultsBoard, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  return {
    topResults: data?.resultsBoard?.topResults,
    currentUserResult: data?.resultsBoard?.currentUserResult,
    loading,
    error,
  };
};
