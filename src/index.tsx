import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/components/app';
import { offers } from '@/mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={5}
      offers={offers}
    />
  </React.StrictMode>
);
