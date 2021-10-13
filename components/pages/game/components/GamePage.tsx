import React, { useState } from 'react';
import { useRouter } from 'next/router';
import shuffle from 'lodash/shuffle';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import { RESULT } from 'config/routes';

import IQuestion from 'interfaces/questionType';

import ErrorMessage from 'components/shared/atoms/ErrorMessage';
import ErrorDecorator from 'decorators/ErrorDecorator';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';
import { LIMIT_QUESTIONS } from './constants';
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

const GamePage = () => {
  const { questions, loading, error } = useGameQuestions({ limitQuestions: LIMIT_QUESTIONS });
  const [answers, setAnswers] = useState<IQuestion[]>([]);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const endGame = () => {
    console.log('Место для запуска мутации с записью ответов ---  ', answers);
    router.push(RESULT);
  };
  if (questions.length > 0 && step >= questions.length) {
    endGame();
  }
  const addAnswer = (question: IQuestion) => (answer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, { ...question, answer }]);
    setStep(step + 1);
  };
  const currentQuestion = getCurrentQuestion(questions, step);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <ErrorMessage>{new ErrorDecorator(error).getMessages()}</ErrorMessage>;
  return currentQuestion ? (
    <GameStep question={currentQuestion} endGame={endGame} addAnswer={addAnswer(currentQuestion)} />
  ) : (
    <>Нет вопросов</>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
