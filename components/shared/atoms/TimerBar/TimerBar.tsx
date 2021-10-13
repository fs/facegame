import React from 'react';

import { Wrapper, Bar } from './styled';

interface ITimerBar {
  width: number;
  time: number;
}

const TimerBar = ({ width, time }: ITimerBar): JSX.Element => {
  return (
    <Wrapper>
      <div>{`${time} s.`}</div>
      <Bar width={width} />
    </Wrapper>
  );
};

export default TimerBar;
