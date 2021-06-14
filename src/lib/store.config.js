import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import React from 'react';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  // blacklist: ['categories']
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const middlewareComponents = [thunk];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewareComponents.push(logger);
}

const middleware = applyMiddleware(...middlewareComponents);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
