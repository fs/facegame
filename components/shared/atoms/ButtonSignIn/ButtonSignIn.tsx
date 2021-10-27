import React from 'react';
import useSignIn from 'lib/apollo/hooks/actions/useSignIn';
import { signInWithGoogle } from 'lib/auth/signInWithGoogle';
import Button from 'components/shared/atoms/Button';
import { customLoginButtonStyles, GoogleIcon } from './styled';

const googleClientId = process.env.GOOGLE_CLIENT_ID;

const ButtonSignIn = (): JSX.Element => {
  const [signIn] = useSignIn();

  const signInWithGoogleHandler = async () => {
    try {
      const resultAuth = await signInWithGoogle({
        // eslint-disable-next-line @typescript-eslint/camelcase
        client_id: googleClientId,
      });
      // @ts-ignore
      await signIn({ googleAuthCode: resultAuth.code });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={signInWithGoogleHandler} customStyles={customLoginButtonStyles}>
      <GoogleIcon />
      Login with Google
    </Button>
  );
};

export default ButtonSignIn;
