import {createStore, combineReducers,applyMiddleware, compose } from 'redux';
import booksReducer from './books/booksReducer';
import usersReducer from './users/usersReducer'
import thunk from "redux-thunk";


const allReducers = combineReducers({
    booksReducer,usersReducer
  })

let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  }

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(allReducers,enhancer);
export default store