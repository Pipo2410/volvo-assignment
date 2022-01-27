import React from 'react';

import type { AppProps } from 'next/app';
import '../public/css/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
