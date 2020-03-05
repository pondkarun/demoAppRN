/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground
} from 'react-native';



class Workshop16 extends Component {

  renderListHeader() {
    return (
      <View>
        <Image style={{ width: '100%', height: 90, resizeMode: 'contain', marginTop: 40, marginBottom: 40 }} source={require('./img/header_react_native.png')} />
      </View>
    )
  }

  renderItem(item) {
    const { cardStyle, avatar } = styles;

    return (
      <View style={cardStyle}>
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <Image source={require('./img/avatar.png')} style={avatar} />

          <View style={styles.titleSubtitleStyle}>
            <Text style={{ color: "#000000EE" }}>Koisuru Fortune Cookie คุกกี้เสี่ยงทาย</Text>
            <Text style={{ color: "#000000AA" }}>128,136,082 views</Text>
          </View>
        </View>
        <Image source={require('./img/youtube_image.jpg')} style={{ width: '100%', height: 200 }} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./img/bg.png')}>
          <FlatList
            style={{ paddingLeft: 28, paddingRight: 28 }}
            data={[1, 2, 3, 4]}
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    cardStyle: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 7
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: (45 / 2)
    },
    titleSubtitleStyle: {
      flexDirection: 'column',
      marginLeft: 10
      
    }
  }
)

export default Workshop16;