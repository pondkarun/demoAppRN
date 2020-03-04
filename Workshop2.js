import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Workshop2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>

        <BlinkText message="Welcome To Component" interval={100}></BlinkText>

      </View>
    );
  }
}


class BlinkText extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: true };
    setInterval(() => {
      this.setState(oldStat => {
        return { isVisible: !oldStat.isVisible }
      })
    }, this.props.interval)
  }

  render() {
    let display = this.state.isVisible ? this.props.message : '';
    return (
      <Text style={{ color: '#ffffff' }}>
        {display}
      </Text>
    );
  }
}