import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  Animated,
  Button,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { show, hide } from '../action/home.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6'
  },
  view: {
    flexDirection: 'row' 
  }
})
@connect(state => ({
  status: state.home.status
}), dispatch => ({
  showFunc: () => dispatch(show()),
  hideFunc: () => dispatch(hide())
}))
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shake: new Animated.Value(0)
    }    
  }
  pressFunc() {
    if(this.props.status == 'show') {
      this.props.hideFunc()
      this.setState({shake: new Animated.Value(0)})
    } else {
      this.props.showFunc()
      Animated.timing(
        this.state.shake,
        {
          toValue: 1,
          duration: 1000
        }
      ).start()      
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={{fontSize: 20}}>Hello </Text>
          {
            this.props.status == 'show' ?  <Animated.Text style={{opacity: this.state.shake, fontSize: 20}}>MIC</Animated.Text> : <Text style={{fontSize: 20}}>World</Text>
          }
        </View>
        <Button
          onPress={() => {this.pressFunc()}}
          title={this.props.status}
          color="#841584"
        />
      </View>
    )
  }
}