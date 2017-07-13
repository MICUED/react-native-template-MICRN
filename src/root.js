import React, { Component } from "react"
import { connect } from "react-redux"
import { BackHandler } from "react-native"
import { addNavigationHelpers } from "react-navigation"
import { AppNavigator } from "./routerConfig.js"
@connect(state => ({
    nav: state.nav
}), dispatch => ({dispatch}))
export default class AppWithNavigationState extends Component {
  handleBackPress = () => {
      const { dispatch, nav } = this.props
      const navigation = addNavigationHelpers({
          dispatch,
          state: nav,
      })
      navigation.goBack()
      return true
  }  
  componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackPress)
  }
  componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress)
  }  
  render() {
      var { dispatch, nav } = this.props
      return (
          <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
      )
  }
}