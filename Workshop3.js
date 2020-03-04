import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Workshop3 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.item}>PondKarun</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  item: {
    fontSize: 20,
    color: "#FFFFFF"
  }

});