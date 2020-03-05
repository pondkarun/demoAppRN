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
  FlatList,
  ImageBackground
} from 'react-native';

export default class Workshop15 extends Component {

  Img = () => {
    return (
      <View>
        <Image style={{ width: '100%', height: 90, resizeMode: 'contain', marginTop: 40 , marginBottom: 40}}
          source={require('./img/header_react_native.png')} />
      </View>
    )
  }

  renderItem = (item) => {
    return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: 'white', marginBottom: 20 , borderRadius: 7 }}>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Image source={require('./img/avatar.png')} style={{ width: 45, height: 45, borderRadius: (45 / 2) }} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ color: "#000000EE" }}>Koisuru Fortune Cookie คุกกี้เสี่ยงทาย</Text>
            <Text style={{ color: "#000000AA" }}>128,136,082 views</Text>
          </View>
        </View>
        <Image source={require('./img/youtube_image.jpg')} style={{ width: '100%', height: 200, }} />
      </View>
    )
  }

  render() {
    return (
      <View>
        <ImageBackground style={{ width: '100%', height: '100%' }}
          source={require('./img/bg.png')}>
          <FlatList style={{ paddingLeft: 28, paddingRight: 28 }}
            data={[1, 2, 3, 4]}
            ListHeaderComponent={this.Img}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    )
  }
}

