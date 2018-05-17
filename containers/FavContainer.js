/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Favoris from '../Screens/Favoris'
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import TodoReducer from '../redux/Reducers/Reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(TodoReducer)

export default class FavContainer extends Component {
  render() {
    return (
      <Provider store={store}>

        <Favoris />

      </Provider>

    );
  }
}
