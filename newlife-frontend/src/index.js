import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Style from './styles'

ReactDOM.render(
  <React.StrictMode>
      <Style />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
