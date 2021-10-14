import React from 'react';
import type { PropsWithChildren } from 'react';
import ITest from 'interfaces/testType';

import Header from 'components/shared/organisms/Header';

import { Wrapper, PageContent } from './styled';

const DefaultTemplate = ({
  children,
  title,
  headerChildren,
  testId = 'default-template',
}: PropsWithChildren<ITest>): JSX.Element => {
  return (
    <Wrapper data-cy={testId} data-testid={testId}>
      <Header title={title}>{headerChildren}</Header>
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
