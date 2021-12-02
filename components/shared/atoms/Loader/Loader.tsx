import React from 'react';
import type { PropsWithChildren } from 'react';

import Test from 'types/Test';

import { Wrapper, Title } from './styled';

const Loader = ({ children, testId }: PropsWithChildren<Test>): JSX.Element => (
  <Wrapper data-testid={testId} data-cy={testId}>
    <Title>{children}</Title>
  </Wrapper>
);

export default Loader;
