import React from 'react';

import { Wrapper, Bar, Timer } from './styled';

interface ITimerBar {
  width: number;
  time: number;
}

const TimerBar = ({ width, time }: ITimerBar): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <Timer>{time}</Timer>
        {` sec`}
      </div>
      <Bar width={width} />
    </Wrapper>
  );
};

export default TimerBar;
