import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';

import Button from 'components/shared/atoms/Button';
import GoogleIcon from 'public/images/icons/google-icon';
import { Title, PageContent, Content, Oranization, TagLine, Description, PreviewImg, ImgGroup } from './styled';

const HomePage = () => {
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
            <Button icon={<GoogleIcon />} text="Login with Google" />
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
