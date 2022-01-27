import React from 'react';
import { StyleProvider, ThemePicker } from 'vcc-ui';

import CarSection from '../components/car-section';
import Header from '../components/layout/Header';

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Header />
          <CarSection />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
