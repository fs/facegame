import React from 'react';
import { DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonWrapper } from './styled';

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  customStyles?: (theme: DefaultTheme) => FlattenSimpleInterpolation;
  href?: string;
}

const ButtonedLink = React.forwardRef(
  ({ children, customStyles, onClick, href }: Props, ref: any): JSX.Element => {
    return (
      <ButtonWrapper href={href} onClick={onClick} ref={ref} customStyles={customStyles}>
        {children}
      </ButtonWrapper>
    );
  },
);

export default ButtonedLink;
