import { useQuery } from '@apollo/client';
import GameQuestions from 'graphql/queries/pages/gameQuestions.graphql';

export const useGameQuestions = ({ limitQuestions = 4, onCompleted }) => {
  const { data, loading, error } = useQuery(GameQuestions, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: { limitQuestions, limitWrongAnswers: 3 },
    onCompleted,
  });

  return {
    questions: data?.questions || [],
    loadingQuestions: loading,
    error,
  };
};
