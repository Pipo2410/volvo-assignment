import React from 'react';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import '../public/css/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Volvo Cars</title>
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Welcome to the website of Volvo Cars. Explore and design your favorite Volvo SUV, estate and sedan today."
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
