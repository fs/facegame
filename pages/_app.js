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
          <meta
            property="og:description"
            content="Each of us probably asked ourselves a question: “What does this or that employee look like?” FaceGame is a web app that allows you to get to know your coworkers, so that you will never have such questions again."
          />
          <meta property="og:image" content={`${process.env.ASSET_HOST}/images/open-graph.jpg`} />
          <meta property="og:url" content={`${process.env.ASSET_HOST}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${process.env.ASSET_HOST}/images/open-graph.jpg`} />
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
