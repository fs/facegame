import { useQuery } from '@apollo/client';
import GameQuestions from 'graphql/queries/pages/gameQuestions.graphql';

export const useGameQuestions = ({ limitQuestions = 4, prefetch = true }) => {
  const { data, loading, error } = useQuery(GameQuestions, {
    fetchPolicy: prefetch ? 'cache-first' : 'cache-only',
    variables: { limitQuestions, limitWrongAnswers: limitQuestions - 1 },
  });

  return {
    questions: data?.questions || [],
    loading,
    error,
  };
};
