import React, { Component } from 'react';
import { Platform, TextInput, StyleSheet, Text, View } from 'react-native';

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 * 
 */

export default class Workshop7 extends Component {

  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text}
        </Text>
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