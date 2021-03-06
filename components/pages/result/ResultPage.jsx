import React from 'react';
import styled, { css } from 'styled-components';

import Image from 'next/image';
import logoIcon from 'public/images/loader-logo.gif';
import WithAuth from 'lib/auth/withAuth';
import { withApolloClient } from 'lib/withApolloClient';
import WithAuthSecurity from 'lib/auth/withAuthSecurity';
import { useGetResultsBoard } from 'lib/apollo/hooks/state/useGetResultsBoard';

import { NotifierProvider } from 'contexts/NotifierContext';

import Loader from 'components/shared/atoms/Loader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import HeaderChildrenResult from './components/HeaderChildren';
import GameResult from './components/GameResult';
import LeaderBoard from './components/LeaderBoard';

import { WrapperFlexCenter } from './components/styled';
import { Footer } from '../index/styled';
import PopularityRating from './components/PopularityRating';

const ResultContainer = styled.div(
  ({ theme: { breakpoints, down } }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 45%;
    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `,
);

const ResultPage = () => {
  const { topResults, currentUserResult, loading } = useGetResultsBoard();

  return (
    <NotifierProvider>
      <DefaultTemplate headerChildren={<HeaderChildrenResult />}>
        {loading && (
          <Loader testId="profile-updating-loader">
            <Image src={logoIcon} width={192} height={72} />
          </Loader>
        )}
        <WrapperFlexCenter>
          {!loading && currentUserResult && (
            <ResultContainer>
              <GameResult currentUserResult={currentUserResult} />
              <PopularityRating />
            </ResultContainer>
          )}
          {!loading && topResults && <LeaderBoard topResults={topResults} currentUserResult={currentUserResult} />}
        </WrapperFlexCenter>
        {!loading && (
          <Footer>
            Designed and developed by <a href="https://www.flatstack.com/">Flatstack</a>
          </Footer>
        )}
      </DefaultTemplate>
    </NotifierProvider>
  );
};

export default withApolloClient(WithAuth(WithAuthSecurity(ResultPage)));
