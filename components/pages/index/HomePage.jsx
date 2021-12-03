import React from 'react';
import Link from 'next/link';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import { useCurrentUser } from 'lib/apollo/hooks/state/useCurrentUser';

import { NotifierProvider } from 'contexts/NotifierContext';
import { GAME } from 'config/routes';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import ButtonSignIn from 'components/shared/atoms/ButtonSignIn';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';
import Notifier from 'components/shared/atoms/Notifier';

import HeaderChildrenResult from '../result/components/HeaderChildren';
import {
  Title,
  PageContent,
  Content,
  TagLine,
  Description,
  FacesImg,
  StarsImg,
  customButtonStyles,
  Footer,
} from './styled';

const HomePage = () => {
  const { user } = useCurrentUser();

  const tagLineUnAuth = 'FaceGame is a web app that will help you to get to know your coworkers.';
  const tagLineAuth =
    'Identify as many colleagues as you can in 45 seconds. You’ll get a score based on the accuracy of your answers.';
  return (
    <NotifierProvider>
      <DefaultTemplate headerChildren={<HeaderChildrenResult />}>
        <PageContent data-testid="page-content">
          <Content>
            <Title>Check how well you know your colleagues!</Title>

            <TagLine>{user ? tagLineAuth : tagLineUnAuth}</TagLine>

            {user ? (
              <Link href={GAME} passHref>
                <ButtonedLink customStyles={customButtonStyles}>Start game</ButtonedLink>
              </Link>
            ) : (
              <>
                <ButtonSignIn />
                <Description>to save game results and have access to the leaderboard</Description>
              </>
            )}
            <StarsImg src={`${process.env.ASSET_HOST}/images/stars.png`} />
            <FacesImg src={`${process.env.ASSET_HOST}/images/faces.png`} />
          </Content>
        </PageContent>
        <Footer>
          Development and design by
          <a href="https://www.flatstack.com/"> Flatstack</a>
        </Footer>
        <Notifier />
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(HomePage));
