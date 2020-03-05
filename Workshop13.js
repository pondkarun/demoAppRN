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

export default class Workshop13 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={{ padding: 10, flex: 1, flexDirection: "column", justifyContent: "center" }}>
        <Image resizeMode='center' style={{ width: undefined, height: 300 }} source={require('./img/Logo15.png')} />
        <Image resizeMode='center' style={{ height: 100, width: undefined }} source={{ uri: "https://f.ptcdn.info/840/063/000/pr348l83r11F613gIS0-o.jpg" }} />
      </View>

    );
  }
}

