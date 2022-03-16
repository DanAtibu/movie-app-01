import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies/App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div id="mainRoot">
      <Movies/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
