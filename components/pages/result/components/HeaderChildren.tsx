import React from 'react';

import { component as ExitDoor } from 'public/images/icons/exit-door.svg';

import { useCurrentUser } from 'lib/apollo/hooks/state/currentUser';
import useSignOut from 'lib/apollo/hooks/actions/useSignOut';

import { Avatar, FullNameInfo, EmailInfo, WrapperFlexCenter, InfoColumn, HoverIcon } from './styled';

const HeaderChildrenResult = () => {
  const { user } = useCurrentUser(false);
  const [signOut] = useSignOut();

  return (
    !!user && (
      <WrapperFlexCenter>
        <Avatar src={user.avatarUrl} alt={user.firstName} />
        <InfoColumn>
          <FullNameInfo>{`${user.firstName} ${user.lastName}`}</FullNameInfo>
          <EmailInfo>{user.email}</EmailInfo>
        </InfoColumn>
        <HoverIcon onClick={signOut}>
          <ExitDoor />
        </HoverIcon>
      </WrapperFlexCenter>
    )
  );
};
export default HeaderChildrenResult;
