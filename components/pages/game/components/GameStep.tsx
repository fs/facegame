import React from 'react';
import Question from 'domain/Question';
import { component as CorrectIcon } from 'public/images/icons/correct.svg';
import { component as IncorrectIcon } from 'public/images/icons/incorrect.svg';

import { PageContent, Content, PreviewImg, ButtonForAnswer, ButtonForQuestion } from './styled';

type Step = {
  question: Question;
  answer: (value: string) => void;
  isCurrentAnswerCorrect: boolean | null;
  currentAnswer: string | undefined;
  correctAnswerValue: string | undefined;
};

const useAvatarUrlWithoutParams = (url: string) => {
  const removeAfter = url.indexOf('?');
  return url.substring(0, removeAfter);
};

const GameStep = ({ question, answer, isCurrentAnswerCorrect, currentAnswer, correctAnswerValue }: Step) => {
  const isShowResultAnswer = Boolean(currentAnswer);

  return (
    <PageContent data-testid="page-content">
      <PreviewImg key={question.avatarUrl} src={useAvatarUrlWithoutParams(question.avatarUrl)} />
      <Content>
        {question.answerOptions.map((option) =>
          isShowResultAnswer ? (
            <ButtonForAnswer
              isShowCorrectAnswer={!isCurrentAnswerCorrect && option === correctAnswerValue}
              isCorrect={currentAnswer === option ? isCurrentAnswerCorrect : null}
              key={option}
            >
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
              {!isCurrentAnswerCorrect && option === correctAnswerValue && <CorrectIcon />}
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
