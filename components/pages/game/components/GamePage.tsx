import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import IQuestion from 'interfaces/questionType';
import { gameProcess } from 'lib/cache';
import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import GameStep from './GameStep';

const getCurrentQuestion = (questions: IQuestion[], index: number) => {
  const question = questions[index];
  if (!question) {
    return undefined;
  }
  const shuffledNames = shuffle([question.fullName, ...question.wrongAnswers]);

  const options = shuffledNames;
  return { ...question, options };
};

const GamePage = ({ questions }: { questions: IQuestion[] }) => {
  const [step, setStep] = useState(0);

  const { increaseCorrectAnswersCount, addAnswer, endGame } = useGameProcess(gameProcess);

  if (questions.length > 0 && step >= questions.length) {
    endGame();
  }
  const handleAddAnswer = (question: IQuestion) => (answer: string) => {
    addAnswer({ ...question, answer });
    if (question.fullName === answer) {
      increaseCorrectAnswersCount();
    }
    setStep(step + 1);
  };
  const currentQuestion = getCurrentQuestion(questions, step);

  return currentQuestion ? (
    <GameStep question={currentQuestion} addAnswer={handleAddAnswer(currentQuestion)} />
  ) : (
    <>Нет вопросов</>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
