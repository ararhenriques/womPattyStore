import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducer from './reducers/reducer'
import { Provider } from 'react-redux'
import {createStore} from 'redux';

// // Store

// //Action
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// //Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//   }
// };

// let store = createStore(counter);

// //Display(console)
// store.subscribe(()=> console.log(store.getState()));

// //Dispatch
// store.dispatch(increment());

const store = createStore(allReducer);

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
