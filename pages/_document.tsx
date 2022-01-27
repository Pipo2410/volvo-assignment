import Document, { Html, Head, Main, NextScript } from 'next/document';
import { FavIcons } from '@volvo-cars/favicons/react';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <FavIcons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
