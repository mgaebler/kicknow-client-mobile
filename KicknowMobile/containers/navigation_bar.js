import React, { Component } from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { STYLES } from '../base_styles'


export const ROUTE_MAPPER = {

  LeftButton: (route, navigator, index, navState) => {
    if (route.index === 0) {
      return (null);
    } else {
      function getLogo(imageUrl){
        if (imageUrl) {
          return (
            <Image
              resizeMode={Image.resizeMode.contain}
              source={{uri: imageUrl}}
              style={{
                width: 24,
                height: 24,
                borderRadius: 999
              }}
            />
          )
        }
      }

      return (
        <View style={STYLES.navigatorBarItem}>
          <TouchableHighlight onPress={() => navigator.pop()}>
              <Icon
                name='chevron-left'
                size={32}
              />
          </TouchableHighlight>
          {(route.image)? getLogo(route.image):''}
        </View>

      );
    }
  },
  Title: (route, navigator, index, navState) => {
    console.log(route)

    return (
      <View style={STYLES.navigatorBarItem}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24
        }}>
          {route.title}
        </Text>
        {/* {console.log(route, navigator, index, navState)} */}
      </View>
    );
  },
  RightButton: (route, navigator, index, navState) => {
    switch (route.name) {
      case 'places_list':
        return (
          <View style={[
            STYLES.navigatorBarItem,
          ]}>
            
          </View>
        );
        break;
    }
  }
}
