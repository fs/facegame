import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from 'public/styles/globalStyles';
import theme from 'public/styles/theme';
// Custom styles
import 'public/styles/custom.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>FaceGame</title>
          <meta property="og:title" content="Face game" />
          <meta property="og:description" content="Check how good do you know your colleagues" />
          <meta property="og:image" content={`${process.env.ASSET_HOST}/images/open-graph.jpg`} />
          <meta property="og:url" content={`${process.env.ASSET_HOST}`} />
          <script src="https://apis.google.com/js/platform.js" async defer />
        </Head>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </>
    );
  }
}
export default MyApp;
