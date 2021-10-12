import React, { useState, useEffect } from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';

import shuffle from 'lodash/shuffle';
import { RESULT } from 'config/routes';

import { useRouter } from 'next/router';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';
import IQuestion from 'interfaces/questionType';
import GameStep from './GameStep';
import { LIMIT_QUESTIONS } from './constants';

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
  const { questions } = useGameQuestions({ limitQuestions: LIMIT_QUESTIONS });
  const [answers, setAnswers] = useState<IQuestion[]>([]);
  const [step, setStep] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (step >= LIMIT_QUESTIONS) {
      console.log('Место для запуска мутации с записью ответов ---  ', answers);
      router.push(RESULT);
    }
  }, [router, step, answers]);

  const addAnswer = (question: IQuestion) => (answer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, { ...question, answer }]);
    setStep(step + 1);
  };
  const currentQuestion = getCurrentQuestion(questions, step);
  return currentQuestion ? <GameStep question={currentQuestion} addAnswer={addAnswer(currentQuestion)} /> : <></>;
};

export default withApolloClient(WithAuth(WithAuthSecurity(GamePage)));
