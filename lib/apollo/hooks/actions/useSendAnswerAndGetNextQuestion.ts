import { useCallback } from 'react';
import SendAnswerAndGetNextQuestion from 'graphql/mutations/sendAnswerAndGetNextQuestion.graphql';
import { useMutation } from '@apollo/client';

import { useNotifier } from 'contexts/NotifierContext';
import warmUpBrowserCache from 'lib/warmUpBrowserCache';
import Question from 'domain/Question';
import PendingQuestion from 'domain/PendingQuestion';

type SendAnswerAndGetNextQuestionProps = {
  gameId: string;
  value: string | undefined;
};

type SendAnswerAndGetNextQuestionData = {
  sendAnswerAndGetNextQuestion: {
    correctAnswerValue: string;
    question: Question;
    correctAnswersCount: number;
    pendingQuestion: PendingQuestion;
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
    onCompleted: async (response) => {
      await warmUpBrowserCache(response.sendAnswerAndGetNextQuestion.pendingQuestion.avatarUrl);
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
