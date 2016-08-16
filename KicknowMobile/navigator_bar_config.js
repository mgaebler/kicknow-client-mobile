import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { STYLES } from './base_styles'


export const ROUTE_MAPPER = {

  LeftButton: (route, navigator, index, navState) => {
    if (route.index === 0) {
      return (null);
    } else {
      return (

        <View style={STYLES.navigatorBarItem}>
          <TouchableHighlight onPress={() => navigator.pop()}>
              <Icon
                name='chevron-left'
                size={32}
              />
          </TouchableHighlight>
        </View>

      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return (
      <View style={STYLES.navigatorBarItem}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24
        }}>Awesome Nav Bar</Text>
      </View>
    );
  },
  RightButton: (route, navigator, index, navState) => {
    return (
      <View style={[
        STYLES.navigatorBarItem,
      ]}>
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Icon name='settings' size={32}/>
        </TouchableHighlight>
      </View>
    );
  },

}
