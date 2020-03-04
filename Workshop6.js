import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 * 
 */
export default class Workshop6 extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#FFFFFF", justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#FF0000' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#00FF00' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#0000FF' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  myText: {
    width: 300,
    height: 300,
    backgroundColor: "#00FF00"
  },

  item: {
    fontSize: 20,
    color: "#FFFFFF"
  }

});