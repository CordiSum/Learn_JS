import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import styled from 'styled-components';
import {Button} from './Appp'

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 240px;
  text-align: center;

  &:hover {
    color: red;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <BigButton as="a">Start</BigButton>
  </StrictMode>
);
