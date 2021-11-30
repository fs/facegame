import React from 'react';

import { HOME } from 'config/routes';

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
        res.redirect(302, HOME);
      } else {
        window.location.href = HOME;
      }
      return {};
    }

    render() {
      return <Page {...this.props} />;
    }
  };

export default WithAuthSecurity;
