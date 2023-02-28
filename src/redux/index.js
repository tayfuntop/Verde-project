import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { dataReducer } from './reducers';

const store = configureStore({
    reducer: combineReducers({ dataReducer }),
    middleware: [thunk],
});

export default store;