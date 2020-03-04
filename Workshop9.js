import React, { Component } from 'react';
import {
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native';

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 * 
 */

export default class Workshop9 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  clickMe() {
    Alert.alert("clickMe")
  }

  longClickME() {
    Alert.alert("longClickME")
  }

  render() {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableHighlight onPress={this.clickMe} underlayColor="gray" onLongPress={this.longClickME}>
          <Image resizeMode="center" source={require('./img/89.jpg')} />
        </TouchableHighlight>
      </View>
    );
  }
}

