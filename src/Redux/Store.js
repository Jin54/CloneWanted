import { combineReducers } from 'redux';
import { createStore } from 'redux';

import BookMark from './BookMark';
import Login from './Login';

const reducer = combineReducers({ BookMark, Login });

export default createStore(reducer);
