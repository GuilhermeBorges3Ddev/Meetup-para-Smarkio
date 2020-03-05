import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

//Aqui nós criamos a variável que recebe nosso container de estado inicialmente vazio
const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));