import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { STYLES } from '../../base_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


class ImagesRow extends Component {

  renderImage(photo, key){
    return (
      <Image
        key={key}
        source={{uri: photo.contentUrl}}
        style={{
          flex: 1,
          height: 80
        }}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {this.props.images.map(this.renderImage)}
      </View>
    )
  }
}


export default ImagesRow
