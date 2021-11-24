import React, { useEffect, useState } from 'react';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import useSendAnswerAndGetNextQuestion from 'lib/apollo/hooks/actions/sendAnswerAndGetNextQuestion';
import GameStep from './GameStep';
import HeaderChildren from './HeaderChildren';

interface Question {
  answerOptions: string[];
  avatarUrl: string;
}

const Game = ({ initialQuestion, gameId }: { initialQuestion: Question; gameId: string }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(initialQuestion);
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);

  const [sendAnswerAndGetNextQuestion, sendAnswerAndGetNextQuestionState] = useSendAnswerAndGetNextQuestion();

  const isCurrentAnswerCorrect =
    !sendAnswerAndGetNextQuestionState.loading &&
    !sendAnswerAndGetNextQuestionState.error &&
    sendAnswerAndGetNextQuestionState.data &&
    sendAnswerAndGetNextQuestionState.data.sendAnswerAndGetNextQuestion.question !== currentQuestion
      ? sendAnswerAndGetNextQuestionState.data.sendAnswerAndGetNextQuestion.correctAnswerValue === currentAnswer
      : null;

  useEffect(() => {
    if (currentAnswer) {
      sendAnswerAndGetNextQuestion({ gameId, value: currentAnswer });
    }
  }, [currentAnswer, gameId, sendAnswerAndGetNextQuestion]);

  useEffect(() => {
    if (
      !sendAnswerAndGetNextQuestionState.loading &&
      !sendAnswerAndGetNextQuestionState.error &&
      sendAnswerAndGetNextQuestionState.data
    ) {
      const newQuestion = sendAnswerAndGetNextQuestionState.data.sendAnswerAndGetNextQuestion.question;
      const timeoutID = setTimeout(() => {
        setCurrentAnswer(undefined);
        setCurrentQuestion(newQuestion);
      }, 500);

      return () => {
        clearTimeout(timeoutID);
      };
    }

    return () => {};
  }, [
    sendAnswerAndGetNextQuestionState.data,
    sendAnswerAndGetNextQuestionState.error,
    sendAnswerAndGetNextQuestionState.loading,
  ]);

  const answer = (value: string) => {
    setCurrentAnswer(value);
  };

  return (
    <DefaultTemplate
      title="What is the name of that superhero?"
      headerChildren={
        <HeaderChildren
          correctAnswersCount={sendAnswerAndGetNextQuestionState.data?.sendAnswerAndGetNextQuestion.correctAnswersCount}
        />
      }
    >
      <GameStep
        question={currentQuestion}
        answer={answer}
        isCurrentAnswerCorrect={isCurrentAnswerCorrect}
        currentAnswer={currentAnswer}
      />
    </DefaultTemplate>
  );
};

export default Game;
