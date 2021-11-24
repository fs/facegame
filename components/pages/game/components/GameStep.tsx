import React, { useState, useEffect, useRef } from 'react';
import Question from 'domain/Question';
import { component as CorrectIcon } from 'public/images/icons/correct.svg';
import { component as IncorrectIcon } from 'public/images/icons/incorrect.svg';

import TimerBar from 'components/shared/atoms/TimerBar';

import { PageContent, Content, PreviewImg, ButtonForAnswer, ButtonForQuestion, TitleDescription } from './styled';

const FULL_BAR = 100;
const FULL_TIME = 45;

type Step = {
  question: Question;
  answer: (value: string) => void;
  isCurrentAnswerCorrect: boolean | null;
  currentAnswer: string | undefined;
};

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

const GameStep = ({ question, answer, isCurrentAnswerCorrect, currentAnswer }: Step) => {
  const isShowResultAnswer = Boolean(currentAnswer);

  const endGame = () => {};
  const currentSecond = useTimer(FULL_TIME, endGame);

  const barWidth = (FULL_BAR * currentSecond) / FULL_TIME;

  return (
    <PageContent data-testid="page-content">
      <TitleDescription>What is the name of that superhero?</TitleDescription>
      <TimerBar time={currentSecond} width={barWidth} />
      <PreviewImg key={question.avatarUrl} src={question.avatarUrl} />
      <Content>
        {question.answerOptions.map((option) =>
          isShowResultAnswer ? (
            <ButtonForAnswer isCorrect={currentAnswer === option ? isCurrentAnswerCorrect : null} key={option}>
              {(() => {
                switch (currentAnswer === option ? isCurrentAnswerCorrect : null) {
                  case true:
                    return <CorrectIcon />;
                  case false:
                    return <IncorrectIcon />;
                  default:
                    return null;
                }
              })()}
              {option}
            </ButtonForAnswer>
          ) : (
            <ButtonForQuestion key={option} onClick={() => answer(option)}>
              {option}
            </ButtonForQuestion>
          ),
        )}
      </Content>
    </PageContent>
  );
};

export default GameStep;
