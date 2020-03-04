import React, { Component } from 'react';
import {
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 * 
 */

export default class Workshop8 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  clickMe(){
    Alert.alert("Hello")
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1 ,flexDirection: "column" , justifyContent: "center" }}>
        <Button title="Press Me" onPress={this.clickMe} />
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