import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Workshop1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>

        <MyText message="Welcome To Component" data="1234"></MyText>

      </View>
    );
  }
}


class MyText extends Component {
  render() {
    return (
      <Text style={{ color: '#ffffff' }}>
        {this.props.message} {this.props.data}
      </Text>
    );
  }
}