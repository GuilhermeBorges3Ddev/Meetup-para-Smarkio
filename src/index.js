import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//Esse cara é quem passo o reducer para dentro de nosso "store-container" que está vazio
import { Provider } from 'react-redux';

//Importamos aqui o reducer com o valor da action já tratado
import postReducer from './reducers/postReducer';

//Aqui nós criamos a variável que recebe nosso container de estado inicialmente vazio
const store = createStore(postReducer);

//A aplicação fica "envelopada" pelo container de estados
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root')
);