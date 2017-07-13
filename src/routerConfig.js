import React, { Component } from "react"
import { StackNavigator } from "react-navigation"
import CardStackStyleInterpolator from "react-navigation/src/views/CardStackStyleInterpolator"
import HomeScreen from "./container/Home.js"
const paramsToProps = (SomeComponent) => { 
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const routes = {
    Home: { screen: paramsToProps(HomeScreen) }
}
const stackNavigatorConfig = {
    mode: "card",
    headerMode: "none",
    transitionConfig: (() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }))
}
export const AppNavigator = StackNavigator(routes, stackNavigatorConfig)
