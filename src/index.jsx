import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from "./styles/globals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


