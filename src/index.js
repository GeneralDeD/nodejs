import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Responsive/Adapt_2560.css'
import './Responsive/Adapt_1660.css'
import './Responsive/Adapt_1440.css'
import './Responsive/Adapt_1200.css'
import './Responsive/Adapt_990to1200.css'
import './Responsive/Adapt_770.css'
import './Responsive/Adapt_550.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
