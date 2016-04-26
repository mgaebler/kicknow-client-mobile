import React, {
  Component,
  Image,
  PropTypes,
  Text,
  View,
} from 'react-native'


class PlaceDetail extends Component {
  render() {
    return (
      <View>
        <Image />
        <Text>{this.props.place.name}</Text>
      </View>
    )
  }
}

PlaceDetail.propTypes = {
  place: PropTypes.object.isRequired
}

export default PlaceDetail
