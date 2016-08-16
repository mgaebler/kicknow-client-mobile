import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { STYLES } from '../../base_styles';


class ImagesRow extends Component {

  renderImage(photo, key){
    return (
      <Image
        style={{flex: 1}}
        key={key}
        resizeMode='cover'
        source={{uri: photo.contentUrl}}
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
