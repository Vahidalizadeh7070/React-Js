import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './Store/index';

// In React version 18, we have to use ReactDOMClient and createRoot method to 
//have an access to index.html and a div with 'root' id
const root = ReactDOMClient.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
