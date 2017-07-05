import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  Image,
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
  image: {
    height: 100
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
  }
  pressFunc() {
    if(this.props.status == 'show') {
      this.props.hideFunc()
    } else {
      this.props.showFunc()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.status == 'show' &&  <Image resizeMode="contain" source={require('../assert/img/loading.gif')}></Image>}
        <Button
          onPress={() => {this.pressFunc()}}
          title={this.props.status}
          color="#841584"
        />
      </View>
    )
  }
}