import React from 'react';
import Link from 'next/link';
import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';
import { GAME } from 'config/routes';
import ButtonedLink from 'components/shared/atoms/ButtonedLink';
import { Title, PageContent, Content, PreviewImg, ImgGroup } from './styled';

const ResultPage = () => {
  return (
    <NotifierProvider>
      <DefaultTemplate>
        <PageContent data-testid="page-content">
          <Content>
            <Title>Game Results</Title>
            <ImgGroup>
              <PreviewImg zIndex={3} opacity={1} rotate={0} />
            </ImgGroup>
          </Content>
          <Link href={GAME} passHref>
            <ButtonedLink>Начать новую игру</ButtonedLink>
          </Link>
        </PageContent>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(ResultPage)));
