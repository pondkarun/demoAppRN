import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{ color: '#ffffff' }}>
          Welcome To App1
        </Text>
        <Text style={{ color: '#ffffff' }}>
          Welcome To App2
        </Text>
        <Text style={{ color: '#ffffff' }}>
          Welcome To App3
        </Text>

      </View>
    );
  }
}