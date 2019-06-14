import React from 'react';
import ReactDOM from 'react-dom';
// I need to turn all the empty component files I created into routes, so I import BrowserRouter
// I'm not reassigning as Router because I'm only using it once 
// I'll then wrap it around App 
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

