import React from 'react';

import { ButtonWrapper, Text, Icon } from './styled';

interface Props {
  onClick?: () => void;
  icon: JSX.Element;
  text: string;
  customStyles?: string;
}

const Button = ({ icon, text, customStyles, onClick }: Props): JSX.Element => {
  return (
    <ButtonWrapper onClick={onClick} customStyles={customStyles}>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

export default Button;
