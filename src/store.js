import { createStore } from 'redux'
import quotes from './dataBase/quotes'
import { quotesLength } from './dataBase/quotes'
import { bgNumber } from './components/QuoteGen/QuoteGen.js'
//For Redux DevTools to work
import { devToolsEnhancer } from 'redux-devtools-extension';
import { combineReducers } from '@reduxjs/toolkit';


//Action names
const GET_QUOTE = 'GET_QUOTE';
const CHANGE_BG = 'CHANGE_BG';

//Action constructors
export function getQuote(_randomIndex) {
  return {
    type: GET_QUOTE,
    randomIndex: _randomIndex,
  }
}

export function getBg(_ramdomBg) {
  return {
    type: CHANGE_BG,
    ramdomBg: _ramdomBg,
  }
}

//Reducers & Store

//Initial State
let initialState = quotes[Math.floor(Math.random() * quotesLength)];

function QuoteGen_reducer(state = [initialState.quote, initialState.author], action) {
  switch (action.type) {
    case GET_QUOTE:
      state = []; //Cleaning the state
      return state.concat(quotes[action.randomIndex].quote)
        .concat(quotes[action.randomIndex].author);
    default:
      return state;
  }
}

function Body_reducer(state = Math.floor(Math.random() * bgNumber), action) {
  switch (action.type) {
    case CHANGE_BG:
      return action.ramdomBg;
    default:
      return state;
  }
}

const reducers = combineReducers({QuoteGen_reducer:QuoteGen_reducer,Body_reducer:Body_reducer})

const store = createStore(reducers, devToolsEnhancer());

export default store;