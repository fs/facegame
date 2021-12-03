import React from 'react';
import type { PropsWithChildren } from 'react';

import Header from 'components/shared/organisms/Header';

import { Wrapper, PageContent } from './styled';

interface IProps {
  children?: (false | JSX.Element)[] | JSX.Element;
  headerChildren?: JSX.Element;
  title?: string;
  testId?: string;
}
const DefaultTemplate = ({
  children,
  title,
  headerChildren,
  testId = 'default-template',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Wrapper data-cy={testId} data-testid={testId}>
      <Header title={title}>{headerChildren}</Header>
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
