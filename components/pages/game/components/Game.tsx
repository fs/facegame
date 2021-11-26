import React, { useEffect, useRef, useState } from 'react';

import { RESULT } from 'config/routes';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import TimerBar from 'components/shared/atoms/TimerBar';
// import useEndGame from 'lib/apollo/hooks/actions/endGame';
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

  const [sendAnswerAndGetNextQuestion, { data, loading, error }] = useSendAnswerAndGetNextQuestion();
  // const [endGame] = useEndGame();

  const router = useRouter();

  const isCurrentAnswerCorrect =
    !loading && !error && data?.sendAnswerAndGetNextQuestion.question !== currentQuestion
      ? data?.sendAnswerAndGetNextQuestion.correctAnswerValue === currentAnswer
      : null;

  useEffect(() => {
    if (currentAnswer) {
      sendAnswerAndGetNextQuestion({ gameId, value: currentAnswer });
    }
  }, [currentAnswer, gameId, sendAnswerAndGetNextQuestion]);

  useEffect(() => {
    if (!loading && !error && data) {
      const newQuestion = data.sendAnswerAndGetNextQuestion.question;
      const timeoutID = setTimeout(() => {
        setCurrentAnswer(undefined);
        setCurrentQuestion(newQuestion);
      }, 500);

      return () => {
        clearTimeout(timeoutID);
      };
    }

    return () => {};
  }, [data, error, loading]);

  const answer = (value: string) => {
    setCurrentAnswer(value);
  };

  const endGameHandler = () => {
    // endGame(gameId);
    router.push(RESULT);
  };

  const currentSecond = useTimer(FULL_TIME, endGameHandler);

  const barWidth = (FULL_BAR * currentSecond) / FULL_TIME;

  return (
    <DefaultTemplate
      title="What is the name of that superhero?"
      headerChildren={
        <HeaderChildren
          // endGame={endGameHandler}
          correctAnswersCount={data?.sendAnswerAndGetNextQuestion.correctAnswersCount}
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
        correctAnswerValue={data?.sendAnswerAndGetNextQuestion.correctAnswerValue}
      />
    </DefaultTemplate>
  );
};

export default Game;
