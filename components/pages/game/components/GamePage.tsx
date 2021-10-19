import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';

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

  const handleAddAnswer = (question: IQuestion) => (answer: string) => {
    addAnswer({ ...question, answer });
    if (question.fullName === answer) {
      increaseCorrectAnswersCount();
    }
    const nextStep = step + 1;
    setStep(nextStep);
    if (questions.length > 0 && nextStep >= questions.length) {
      endGame();
    }
  };
  const currentQuestion = getCurrentQuestion(questions, step);

  return currentQuestion ? (
    <GameStep question={currentQuestion} addAnswer={handleAddAnswer(currentQuestion)} />
  ) : (
    <>Нет вопросов</>
  );
};

export default GamePage;
