import React from 'react';

import { ButtonWrapper, Text, Icon } from './styled';

interface Props {
  icon: JSX.Element;
  text: string;
}

const Button = ({ icon, text }: Props): JSX.Element => {
  return (
    <ButtonWrapper>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

export default Button;
