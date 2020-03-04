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

export default class Workshop13 extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (

      <View style={{ padding: 10, flex: 1, flexDirection: "column", justifyContent: "center" }}>
        <Image resizeMode='center' style={{width: undefined ,height: 300}} source={require('./img/Logo15.png')} />
      </View>

    );
  }
}

