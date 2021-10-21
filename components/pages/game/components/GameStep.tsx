import React, { useState, useEffect, useRef } from 'react';
import IQuestion from 'interfaces/questionType';
import { component as LogoIcon } from 'public/images/face-game-logo.svg';
import { component as CorrectIcon } from 'public/images/icons/correct.svg';
import { component as IncorrectIcon } from 'public/images/icons/incorrect.svg';

import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import { gameProcess } from 'lib/cache';

import TimerBar from 'components/shared/atoms/TimerBar';
import Loader from 'components/shared/atoms/Loader';

import {
  PageContent,
  Content,
  PreviewImg,
  ImgGroup,
  ButtonForAnswer,
  ButtonForQuestion,
  TitleDescription,
} from './styled';

const FULL_BAR = 100;
const FULL_TIME = 30;
interface IStep {
  question: IQuestion;
  addAnswer: (answer: string) => void;
}

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

const GameStep = ({ question, addAnswer }: IStep) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isShowResultAnswer = selectedId !== null;
  const optionsWithUi = question.options.map((name, id) => {
    const isCorrect = name === question.fullName;
    const isMatchSelected = id === selectedId;
    return {
      id,
      name,
      isCorrect,
      isMatchSelected,
    };
  });
  const { endGame } = useGameProcess(gameProcess);
  const currentSecond = useTimer(30, endGame);

  const barWidth = (FULL_BAR * currentSecond) / FULL_TIME;
  const callNextStep = (name: string) => () => {
    setSelectedId(null);
    addAnswer(name);
  };
  if (currentSecond === 0) {
    return (
      <Loader testId="profile-updating-loader">
        <LogoIcon />
      </Loader>
    );
  }
  return (
    <PageContent data-testid="page-content">
      <TitleDescription>What is the name of that superhero?</TitleDescription>
      <TimerBar time={currentSecond} width={barWidth} />
      <PreviewImg src={question.avatarUrl} zIndex={3} opacity={1} rotate={0} />
      <Content>
        {optionsWithUi.map(({ id, name, isCorrect, isMatchSelected }) => {
          return isShowResultAnswer ? (
            <ButtonForAnswer isCorrect={isCorrect} isMatchSelected={isMatchSelected} key={id}>
              {isCorrect ? <CorrectIcon /> : <IncorrectIcon />}
              {name}
            </ButtonForAnswer>
          ) : (
            <ButtonForQuestion
              key={id}
              onClick={() => {
                setSelectedId(id);
                setTimeout(callNextStep(name), 500);
              }}
            >
              {name}
            </ButtonForQuestion>
          );
        })}
      </Content>
    </PageContent>
  );
};

export default GameStep;
