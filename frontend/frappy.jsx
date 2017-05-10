import Game from './components/game';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById("root");
  let store = configureStore();

  ReactDOM.render(<Game store={ store }/>, root);
})
