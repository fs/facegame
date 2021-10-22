import React, { useEffect, useState } from 'react';

import logoIcon from 'public/images/loader-logo.gif';
import ImageNext from 'next/image';
import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import useGameProcess from 'lib/apollo/hooks/actions/useGameProcess';
import { gameProcess } from 'lib/cache';
import { useGameQuestions } from 'lib/apollo/hooks/state/game';

import { NotifierProvider } from 'contexts/NotifierContext';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Loader from 'components/shared/atoms/Loader';

import IQuestion from 'interfaces/questionType';
import { LIMIT_QUESTIONS } from './components/constants';
import GamePage from './components/GamePage';
import HeaderChildren from './components/HeaderChildren';

const cacheImages = (imageUrls: string[]) => {
  const promises = imageUrls.map((url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      img.src = url;
    });
  });
  return Promise.all(promises);
};

const Game = () => {
  const [isCached, setIsCached] = useState(false);
  const { questions, loading } = useGameQuestions({
    limitQuestions: LIMIT_QUESTIONS,
    onCompleted: async (data: { questions: IQuestion[] }) => {
      const imageUrls = data.questions.map(({ avatarUrl }) => avatarUrl);
      await cacheImages(imageUrls.slice(0, 2));
      setIsCached(true);
      await cacheImages(imageUrls.slice(2, 5));
      await cacheImages(imageUrls.slice(5));
    },
  });

  const { resetCorrectAnswersCount, resetAnswers } = useGameProcess(gameProcess);
  useEffect(() => {
    resetCorrectAnswersCount();
    resetAnswers();
  }, []);

  return (
    <NotifierProvider>
      <DefaultTemplate title="What is the name of that superhero?" headerChildren={<HeaderChildren />}>
        {(!isCached || loading) && (
          <Loader testId="profile-updating-loader">
            <ImageNext src={logoIcon} width={192} height={72} />
          </Loader>
        )}
        {!loading && <GamePage questions={questions} />}
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(Game)));
