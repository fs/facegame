import React from 'react';

import { ButtonWrapper, Text } from './styled';

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  customStyles?: string;
  href?: string;
}

const ButtonedLink = React.forwardRef(
  ({ children, customStyles, onClick, href }: Props, ref: any): JSX.Element => {
    return (
      <ButtonWrapper href={href} onClick={onClick} ref={ref} customStyles={customStyles}>
        <Text>{children}</Text>
      </ButtonWrapper>
    );
  },
);

export default ButtonedLink;
