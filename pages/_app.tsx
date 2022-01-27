import React from 'react';

import type { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../public/css/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <StyleProvider>
        <ThemePicker variant="light">
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.Fragment>
  );
}

export default MyApp;
