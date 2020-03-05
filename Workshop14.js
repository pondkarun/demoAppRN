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
  Image,
  FileList,
  FlatList
} from 'react-native';

export default class Workshop14 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={{ padding: 10, flex: 1, flexDirection: "column" }}>
        <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} renderItem={({ item }) => <Text> {item} </Text>} />
      </View>

    );
  }
}

