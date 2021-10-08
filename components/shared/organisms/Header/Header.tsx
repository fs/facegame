import React from 'react';

import IUser from 'interfaces/userType';
import ISignOut from 'interfaces/actionsType';

import Logo from 'components/shared/atoms/Logo';
import { signInWithGoogle } from 'lib/auth/signInWithGoogle';
import { useSignIn } from 'lib/apollo/hooks/actions/auth';
import { GOOGLE_CLIENT_ID } from 'public/publicRuntimeVars';
import { HeaderWrapper, Links } from './styled';

interface Props {
  user: IUser;
  signOut: ISignOut;
}

const Header = ({ user, signOut }: Props): JSX.Element => {
  const [signIn] = useSignIn();
  const signInCallable = signIn as CallableFunction;
  async function signInWithGoogleHandler() {
    try {
      const resultAuth = await signInWithGoogle({
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: GOOGLE_CLIENT_ID,
      });
      await signInCallable({ googleAuthCode: resultAuth.code });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <HeaderWrapper>
      <Logo />
      <Links data-cy="header-links">
        {!user && (
          <button type="button" onClick={signInWithGoogleHandler}>
            Log in
          </button>
        )}
        {!!user && (
          <>
            <div>{`${user.firstName} ${user.lastName}`}</div>
            <button type="button" onClick={() => signOut()}>
              Sign out
            </button>
          </>
        )}
      </Links>
    </HeaderWrapper>
  );
};

export default Header;
