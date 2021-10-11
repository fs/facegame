import React, { useState, useEffect } from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';

import _ from 'lodash';
import { RESULT } from 'config/routes';

import { useRouter } from 'next/router';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';
import { Colors } from 'public/styles/theme';
import { Title, PageContent, Content, PreviewImg, ImgGroup, Button } from './styled';

interface IQuestion {
  id: number;
  name: string;
  fullName: string;
  wrongAnswers: string[];
  answerStatusColor: Colors;
  options: string[];
}
interface IStep {
  question: IQuestion;
  addAnswer: (answer: string) => void;
}

const LIMIT_QUESTIONS = 4;

const getAnswerStatusColor = (isCorrect: boolean, isMatchSelected: boolean): Colors => {
  if (isCorrect) {
    return Colors.green;
  }
  if (!isCorrect && isMatchSelected) {
    return Colors.red;
  }
  return Colors.lightGrey;
};

const getCurrentQuestion = (questions: IQuestion[], index: number) => {
  const question = questions[index];
  if (!question) {
    return undefined;
  }
  const shuffledNames = _.shuffle([question.fullName, ...question.wrongAnswers]);

  const options = shuffledNames;
  return { ...question, options };
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
  return (
    <NotifierProvider>
      <DefaultTemplate>
        {currentQuestion && <GameStep question={currentQuestion} addAnswer={addAnswer(currentQuestion)} />}
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(GamePage));
