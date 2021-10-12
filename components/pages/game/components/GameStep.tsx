import React, { useState } from 'react';
import IQuestion from 'interfaces/questionType';
import { component as CorrectIcon } from 'public/images/icons/correct.svg';
import { component as IncorrectIcon } from 'public/images/icons/incorrect.svg';
import { Title, PageContent, Content, PreviewImg, ImgGroup, ButtonForAnswer, ButtonForQuestion } from './styled';

interface IStep {
  question: IQuestion;
  addAnswer: (answer: string) => void;
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

  return (
    <PageContent data-testid="page-content">
      <div>
        <div> {question.fullName} </div>
        <ImgGroup>
          <PreviewImg zIndex={3} opacity={1} rotate={0} />
          <PreviewImg zIndex={2} opacity={0.44} rotate={11} />
        </ImgGroup>
      </div>
      <Title>What is the name of that superhero?</Title>
      <Content>
        {optionsWithUi.map(({ id, name, isCorrect, isMatchSelected }) => {
          return isShowResultAnswer ? (
            <ButtonForAnswer
              isCorrect={isCorrect}
              isMatchSelected={isMatchSelected}
              key={id}
              onClick={() => {
                setSelectedId(null);
                addAnswer(name);
              }}
            >
              {isCorrect ? <CorrectIcon /> : <IncorrectIcon />}
              {name}
            </ButtonForAnswer>
          ) : (
            <ButtonForQuestion
              key={id}
              onClick={() => {
                setSelectedId(id);
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
