// CSS
import './scss/style.scss';
import './css/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuredStore from './store.production';
import Routers from './routes';

const TARGET_EL = document.getElementById('root');

const Root = () => {
  const { store } = configuredStore();
  return (
    <Provider store={store}>
      <>
        <Routers store={store} />
      </>
    </Provider>
  );
};

ReactDOM.render(<Root />, TARGET_EL);
