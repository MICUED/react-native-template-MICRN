import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { AppNavigator } from './routerConfig.js'
@connect(state => ({
  nav: state.nav
}), dispatch => ({dispatch}))
export default class AppWithNavigationState extends Component {
  render() {
    var { dispatch, nav } = this.props
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    )
  }
}