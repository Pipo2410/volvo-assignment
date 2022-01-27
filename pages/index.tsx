import React from 'react';
import { StyleProvider, ThemePicker } from 'vcc-ui';

import CarsSection from '../components/CarsSection';

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <CarsSection />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
