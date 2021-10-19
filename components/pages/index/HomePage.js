import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';
import Link from 'next/link';
import ButtonWithIcon from 'components/shared/atoms/ButtonWithIcon';
import { component as GoogleIcon } from 'public/images/icons/google-icon.svg';
import useSignIn from 'lib/apollo/hooks/actions/useSignIn';
import { GAME } from 'config/routes';
import { signInWithGoogle } from 'lib/auth/signInWithGoogle';
import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';
import { Title, PageContent, Content, Oranization, TagLine, Description, PreviewImg, ImgGroup } from './styled';

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

  return (
    <NotifierProvider>
      <DefaultTemplate>
        <PageContent data-testid="page-content">
          <Content>
            <Oranization>FaceGame</Oranization>
            <Title>Узнай на сколько хорошо ты знаешь коллег</Title>
            <TagLine>
              Dentify as many superheroes as you can in 30 seconds. You`&apos;`ll get a score based on your accuracy and
              speed.
            </TagLine>
            {user ? (
              <Link href={GAME} passHref>
                <ButtonedLink customStyles={customButtonStyles}>Начать новую игру</ButtonedLink>
              </Link>
            ) : (
              <ButtonWithIcon onClick={signInWithGoogleHandler} icon={<GoogleIcon />} text="Login with Google" />
            )}
            <Description>to save game results and have access to the leaderboard</Description>
          </Content>
          <ImgGroup>
            <PreviewImg zIndex={3} opacity={1} rotate={0} />
            <PreviewImg zIndex={2} opacity={0.44} rotate={11} />
            <PreviewImg zIndex={1} opacity={0.44} rotate={22} />
          </ImgGroup>
        </PageContent>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(HomePage));
