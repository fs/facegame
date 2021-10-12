import React, { useState } from 'react';
import { Colors } from 'public/styles/theme';

import IQuestion from 'interfaces/questionType';
import { Title, PageContent, Content, PreviewImg, ImgGroup, Button } from './styled';

interface IStep {
  question: IQuestion;
  addAnswer: (answer: string) => void;
}

const getAnswerStatusColor = (isCorrect: boolean, isMatchSelected: boolean): Colors => {
  if (isCorrect) {
    return Colors.green;
  }
  if (!isCorrect && isMatchSelected) {
    return Colors.red;
  }
  return Colors.lightGrey;
};

const GameStep = ({ question, addAnswer }: IStep) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isShowResultAnswer = selectedId !== null;
  const optionsWithUi = question.options.map((name, id) => {
    const isCorrect = name === question.fullName;
    const isMatchSelected = id === selectedId;
    return {
      id,
      name,
      answerStatusColor: getAnswerStatusColor(isCorrect, isMatchSelected),
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

      <Content>
        <Title>What is the name of that superhero?</Title>
        {optionsWithUi.map(({ id, name, answerStatusColor }) => {
          return (
            <Button
              type="button"
              color={isShowResultAnswer ? answerStatusColor : Colors.lightGrey}
              onClick={() => {
                if (isShowResultAnswer) {
                  setSelectedId(null);
                  addAnswer(name);
                } else {
                  setSelectedId(id);
                }
              }}
              key={id}
            >
              {name}
            </Button>
          );
        })}
      </Content>
    </PageContent>
  );
};

export default GameStep;
