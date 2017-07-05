import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './container/Home.js';

const paramsToProps = (SomeComponent) => { 
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions;
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

export const AppNavigator = StackNavigator({
  Home: { screen: paramsToProps(HomeScreen) }
},
  {
    mode: 'card',
    headerMode: 'none'
  });
