import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './container/Home.js'
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

export const AppNavigator = StackNavigator({
    Home: { screen: paramsToProps(HomeScreen) }
  },{
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const { index } = scene

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            })

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                outputRange: [0, 1, 1, 0.3, 0]
            })

            return { opacity, transform: [{ translateX }] }
        }
    }),
    mode: 'card',
    headerMode: 'none'
  })
