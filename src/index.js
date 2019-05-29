import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import reducer from './store/index';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
);
