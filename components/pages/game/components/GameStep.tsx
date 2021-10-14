import React, { useState, useEffect } from 'react';
import IQuestion from 'interfaces/questionType';
import { component as CorrectIcon } from 'public/images/icons/correct.svg';
import { component as IncorrectIcon } from 'public/images/icons/incorrect.svg';
import TimerBar from 'components/shared/atoms/TimerBar';

import { PageContent, Content, PreviewImg, ImgGroup, ButtonForAnswer, ButtonForQuestion } from './styled';

const FULL_BAR = 100;
const FULL_TIME = 30;
interface IStep {
  question: IQuestion;
  addAnswer: (answer: string) => void;
  endGame: () => void;
}

function useTimer(limit: number, cb = console.log): number {
  const [time, setTime] = useState(limit);
  if (time <= 0) {
    cb('таймер сработал');
  }
  useEffect(() => {
    function tick() {
      setTime((prevTime) => prevTime - 1);
    }
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [time]);
  return time;
}

const GameStep = ({ question, endGame, addAnswer }: IStep) => {
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

  const currentSecond = useTimer(30, endGame);

  const barWidth = (FULL_BAR * currentSecond) / FULL_TIME;
  const callNextStep = (name: string) => () => {
    setSelectedId(null);
    addAnswer(name);
  };
  return (
    <PageContent data-testid="page-content">
      <TimerBar time={currentSecond} width={barWidth} />
      <div>
        <div> {question.fullName} </div>
        <ImgGroup>
          <PreviewImg zIndex={3} opacity={1} rotate={0} />
          <PreviewImg zIndex={2} opacity={0.44} rotate={11} />
        </ImgGroup>
      </div>
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
                setTimeout(callNextStep(name), 1000);
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
