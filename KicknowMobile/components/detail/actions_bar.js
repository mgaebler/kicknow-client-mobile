import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import { STYLES } from '../../base_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const text_center = { alignSelf: 'center' }

class ActionsBar extends Component {
  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>

        <View style={{flex:1}}>
          <Icon style={text_center} name="favorite" size={32} />
          <Text style={text_center}>Some</Text>
        </View>
        <View style={{flex:1}}>
          <Icon style={text_center} name="favorite" size={32} />
          <Text style={text_center}>Some</Text>
        </View>

      </View>
    )
  }
}


export default ActionsBar
