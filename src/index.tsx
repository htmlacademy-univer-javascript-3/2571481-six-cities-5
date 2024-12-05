import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components/app';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import {ToastContainer} from 'react-toastify';
import { checkAuthAction, fetchOffersAction } from '@store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>
);
