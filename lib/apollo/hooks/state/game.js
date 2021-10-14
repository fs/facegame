import { useQuery } from '@apollo/client';
import GameQuestions from 'graphql/queries/pages/gameQuestions.graphql';

export const useGameQuestions = ({ limitQuestions = 4 }) => {
  const { data, loading, error } = useQuery(GameQuestions, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: { limitQuestions, limitWrongAnswers: 3 },
  });

  return {
    questions: data?.questions || [],
    loading,
    error,
  };
};
