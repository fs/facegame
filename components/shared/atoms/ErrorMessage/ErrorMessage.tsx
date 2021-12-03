import React from 'react';
import type { PropsWithChildren } from 'react';
import Test from 'types/Test';

const ErrorMessage = ({ children, testId }: PropsWithChildren<Test>): JSX.Element => (
  <div data-testid={testId} data-cy={testId}>
    {Array.isArray(children) ? children.map((error, index) => <p key={index}>{error}</p>) : <p>{children}</p>}
  </div>
);

export default ErrorMessage;
