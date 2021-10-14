import React from 'react';
import Button from 'components/shared/atoms/ButtonWithIcon';
import { component as GoogleIcon } from 'public/images/icons/google-icon.svg';
import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import { useSignOut } from 'lib/apollo/hooks/actions/auth';
import ISignOut from 'interfaces/actionsType';

const HeaderChildren = () => {
  const { user } = useCurrentUser(false);
  const [signOut] = useSignOut() as [ISignOut];
  return (
    !!user && (
      <>
        {/* <div>{`${user.firstName} ${user.lastName}`}</div> */}
        <Button onClick={signOut} icon={<GoogleIcon />} text="Logout of Google" />
      </>
    )
  );
};

export default HeaderChildren;
