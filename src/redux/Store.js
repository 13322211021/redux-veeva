import { createStore } from 'redux';
import reducer from './Reducer';
import defaultState from './DefaultState'

const store = createStore(reducer, defaultState);

export default store;
