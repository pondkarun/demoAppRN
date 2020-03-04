import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Workshop5 extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#FFFFFF" }}>
        <View style={{ flex: 0.1, backgroundColor: '#FF0000' }} />
        <View style={{ flex: 0.8, backgroundColor: '#00FF00' }} />
        <View style={{ flex: 0.1, backgroundColor: '#0000FF' }} />
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