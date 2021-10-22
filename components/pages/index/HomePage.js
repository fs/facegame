import React from 'react';
import Link from 'next/link';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import useSignIn from 'lib/apollo/hooks/actions/useSignIn';
import { signInWithGoogle } from 'lib/auth/signInWithGoogle';
import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';

import { NotifierProvider } from 'contexts/NotifierContext';
import { GAME } from 'config/routes';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import Button from 'components/shared/atoms/Button';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';

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
  customLoginButtonStyles,
  GoogleIcon,
  Footer,
} from './styled';

const googleClientId = process.env.GOOGLE_CLIENT_ID;

const HomePage = () => {
  const { user } = useCurrentUser();
  const [signIn] = useSignIn();

  const signInWithGoogleHandler = async () => {
    try {
      const resultAuth = await signInWithGoogle({
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: googleClientId,
      });
      await signIn({ googleAuthCode: resultAuth.code });
    } catch (error) {
      console.error(error);
    }
  };
  const tagLineUnAuth = 'FaceGame is a web app that will help you to get to know your coworkers.';
  const tagLineAuth =
    'Identify as many colleagues as you can in 30 seconds. You’ll get a score based on the accuracy of your answers.';
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
                <Button onClick={signInWithGoogleHandler} customStyles={customLoginButtonStyles}>
                  <GoogleIcon />
                  Login with Google
                </Button>
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
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(HomePage));
