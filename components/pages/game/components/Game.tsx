import React, { useEffect, useRef, useState } from 'react';

import { RESULT } from 'config/routes';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import TimerBar from 'components/shared/atoms/TimerBar';
import useSendAnswerAndGetNextQuestion from 'lib/apollo/hooks/actions/sendAnswerAndGetNextQuestion';
import { useRouter } from 'next/router';
import GameStep from './GameStep';
import HeaderChildren from './HeaderChildren';
import { TitleDescription } from './styled';

interface Question {
  answerOptions: string[];
  avatarUrl: string;
}

const FULL_BAR = 100;
const FULL_TIME = 45;

function useTimer(limit: number, cb = console.log): number {
  const [time, setTime] = useState(limit);
  const onceCallRef = useRef(false);
  if (time <= 0 && onceCallRef.current === false) {
    cb();
    onceCallRef.current = true;
  }
  useEffect(() => {
    function tick() {
      setTime((prevTime) => (prevTime === 0 ? 0 : prevTime - 1));
    }
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [time]);
  return time;
}

const Game = ({ initialQuestion, gameId }: { initialQuestion: Question; gameId: string }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(initialQuestion);
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);

  const [sendAnswerAndGetNextQuestion, sendAnswerAndGetNextQuestionState] = useSendAnswerAndGetNextQuestion();
  const router = useRouter();

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

  const endGame = () => {
    router.push(RESULT);
  };
  const currentSecond = useTimer(FULL_TIME, endGame);

  const barWidth = (FULL_BAR * currentSecond) / FULL_TIME;

  return (
    <DefaultTemplate
      title="What is the name of that superhero?"
      headerChildren={
        <HeaderChildren
          endGame={endGame}
          correctAnswersCount={sendAnswerAndGetNextQuestionState.data?.sendAnswerAndGetNextQuestion.correctAnswersCount}
        />
      }
    >
      <TitleDescription>What is the name of that superhero?</TitleDescription>
      <TimerBar time={currentSecond} width={barWidth} />
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
