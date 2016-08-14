import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import { STYLES } from './base_styles'

export const ROUTE_MAPPER = {
  LeftButton: (route, navigator, index, navState) => {
    if (route.index === 0) {
      return (null);
    } else {
      return (

        <View style={STYLES.navigationBarItem}>
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
      <View style={STYLES.navigationBarItem}>
        <Text style={{
          fontWeight: 'bold'
        }}>Awesome Nav Bar</Text>
      </View>
    );
  },
  RightButton: (route, navigator, index, navState) => {
    return (
      <View style={[
        STYLES.navigationBarItem,
      ]}>
        <Text>Done</Text>
      </View>
    );
  },

}
