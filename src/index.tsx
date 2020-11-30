import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from './history'

new Router().start()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
