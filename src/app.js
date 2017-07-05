import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppWithNav from './root.js'
import configStore from './configStore.js'
const store = configStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNav />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MICRN', () => App)
