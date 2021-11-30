import { ApolloError, useQuery } from '@apollo/client';
import ResultsBoard from 'graphql/queries/popularityRating.graphql';

export type TPopularityRating = {
  popularityRating: {
    answersCount: number;
    correctAnswersCount: number;
    avatarUrl: string;
  };
  loading: boolean;
  error?: ApolloError;
};

export const useGetPopularityRating = (): TPopularityRating => {
  const { data, loading, error } = useQuery(ResultsBoard, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });
  return {
    popularityRating: data?.popularityRating,
    loading,
    error,
  };
};
