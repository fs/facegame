import React from 'react';
import type { PropsWithChildren } from 'react';
import IUser from 'interfaces/userType';
import ISignOut from 'interfaces/actionsType';
import Logo from 'components/shared/atoms/Logo';
import { HeaderWrapper, Links, Title } from './styled';

interface Props {
  user?: IUser;
  signOut?: ISignOut;
  title?: string;
}

const Header = ({ title, children }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <HeaderWrapper>
      <Logo />
      <Title>{title}</Title>
      <Links data-cy="header-links">{children}</Links>
    </HeaderWrapper>
  );
};

export default Header;
