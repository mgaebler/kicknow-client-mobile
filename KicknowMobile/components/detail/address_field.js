import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import { STYLES } from '../../base_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


class AddressField extends Component {

  render () {
    let place = this.props.place
    return (
      <View style={STYLES.container}>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <View>
            <Icon name="delete" size={30} color="#4F8EF7" />
          </View>
          <View>
            <Text>{place.name}</Text>
            <Text>{place.address.streetAddress}</Text>
            <Text>{place.address.addressLocality}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default AddressField
