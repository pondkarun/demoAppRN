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

export default class Workshop10 extends Component {

  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  clickMe() {
   this.setState(e => {
     return {active: !e.active}
   })
  }

  render() {
    return (

      <View style={{ padding: 10, flex: 1, flexDirection: "column", justifyContent: "center" }}>
        <Button title={this.state.active ? 'ตกลง' : 'ยกเลิก'} onPress={this.clickMe.bind(this)} />
      </View>

    );
  }
}

