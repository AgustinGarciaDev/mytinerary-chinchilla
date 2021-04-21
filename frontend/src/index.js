import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux' // Provee a mi aplicacion de redux
import mainReducer from './Redux/Reducers/mainReducer'


const miStore = createStore(mainReducer , applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
     <App/>
  </Provider>,
  document.getElementById('root')
);
