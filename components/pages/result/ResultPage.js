import React from 'react';

import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import { NotifierProvider } from 'contexts/NotifierContext';
import { GAME } from 'config/routes';
import { useRouter } from 'next/router';
import { Title, PageContent, Content, PreviewImg, ImgGroup } from './styled';

const ResultPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(GAME);
  };
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
          <button type="button" style={{ width: '200px', height: '60px' }} onClick={handleClick}>
            начать новую игру
          </button>
        </PageContent>
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(ResultPage));
