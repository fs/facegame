import React from 'react';

import IUser from 'interfaces/userType';
import ISignOut from 'interfaces/actionsType';
import Button from 'components/shared/atoms/ButtonWithIcon';
import Logo from 'components/shared/atoms/Logo';
import { component as GoogleIcon } from 'public/images/icons/google-icon.svg';
import { HeaderWrapper, Links } from './styled';

interface Props {
  user: IUser;
  signOut: ISignOut;
}

const Header = ({ user, signOut }: Props): JSX.Element => {
  return (
    <HeaderWrapper>
      <Logo />
      <Links data-cy="header-links">
        {!!user && (
          <>
            <div>{`${user.firstName} ${user.lastName}`}</div>
            <Button onClick={signOut} icon={<GoogleIcon />} text="Logout of Google" />
          </>
        )}
      </Links>
    </HeaderWrapper>
  );
};

export default Header;
