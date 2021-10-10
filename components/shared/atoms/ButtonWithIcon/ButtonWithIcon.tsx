import React from 'react';

import { ButtonWrapper, Text, Icon } from './styled';

interface Props {
  icon: JSX.Element;
  text: string;
  customStyles?: string;
}

const Button = ({ icon, text, customStyles }: Props): JSX.Element => {
  return (
    <ButtonWrapper customStyles={customStyles}>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

export default Button;
