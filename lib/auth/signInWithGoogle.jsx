export const signInWithGoogle = (options = {}) => {
  return new Promise((resolve, reject) => {
    const { gapi } = window;

    if (!gapi)
      reject(
        new Error(
          `You should load the Google APIs platform library to create the "gapi" object:\n
      <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>`,
        ),
      );

    gapi.load('auth2', () => {
      gapi.auth2
        .init(options)
        .then((client) => {
          return client.grantOfflineAccess({
            scope: 'profile email',
          });
        })
        .then((resp) => {
          return resolve(resp);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
};
