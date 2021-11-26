import SendAnswerAndGetNextQuestion from 'graphql/mutations/sendAnswerAndGetNextQuestion.graphql';
import { useMutation } from '@apollo/client';

import { useNotifier } from 'contexts/NotifierContext';
import { useCallback } from 'react';
import Question from 'domain/Question';

type SendAnswerAndGetNextQuestionProps = {
  gameId: string;
  value: string | undefined;
};

type SendAnswerAndGetNextQuestionData = {
  sendAnswerAndGetNextQuestion: {
    correctAnswerValue: string;
    question: Question;
    correctAnswersCount: number;
  };
};

type SendAnswerAndGetNextQuestionInputVariable = SendAnswerAndGetNextQuestionProps;

type SendAnswerAndGetNextQuestionVariables = {
  input: SendAnswerAndGetNextQuestionInputVariable;
};

const useSendAnswerAndGetNextQuestion = () => {
  const { setError } = useNotifier();

  const [mutation, sendAnswerAndGetNextQuestionState] = useMutation<
    SendAnswerAndGetNextQuestionData,
    SendAnswerAndGetNextQuestionVariables
  >(SendAnswerAndGetNextQuestion, {
    onError: (error) => {
      if (setError) setError(error);
    },
  });

  const sendAnswerAndGetNextQuestion = useCallback(
    ({ gameId, value }: SendAnswerAndGetNextQuestionProps) => {
      const sendAnswerAndGetNextQuestionInput = { gameId, value };
      return mutation({
        variables: { input: sendAnswerAndGetNextQuestionInput },
      });
    },
    [mutation],
  );

  return [sendAnswerAndGetNextQuestion, sendAnswerAndGetNextQuestionState] as const;
};

export default useSendAnswerAndGetNextQuestion;
