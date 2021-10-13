import React from 'react';

import { LOGIN } from 'config/routes';

import CurrentUser from 'graphql/queries/currentUser.graphql';

const WithAuthSecurity = (Page) =>
  class WithAuthSecurityClass extends React.Component {
    static async getInitialProps(context) {
      const { req, res, apolloClient } = context;
      const { me } =
        apolloClient.readQuery({
          query: CurrentUser,
        }) || {};

      if (me) return Page.getInitialProps ? Page.getInitialProps(context) : {};

      if (!!req && !!res) {
        res.redirect(302, LOGIN);
      } else {
        window.location.href = LOGIN;
      }
      return {};
    }

    render() {
      return <Page {...this.props} />;
    }
  };

export default WithAuthSecurity;
