import React, {
  Component,
  Image,
  PropTypes,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

class PlacesRow extends Component {
  render () {
    console.log(this.props.place)
    return (
      <TouchableWithoutFeedback onPress={this.props.onRowClick}>
        <View style={STYLES.container}>
            <Image
              source={{uri: this.props.place.logo.contentUrl}}
              style={STYLES.thumbnail}
            />
          <View style={STYLES.rightContainer}>
            <Text style={STYLES.title}>{this.props.place.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

PlacesRow.propTypes = {
  'onRowClick': PropTypes.func,
  'place': PropTypes.object.isRequired,
  'place.logo': PropTypes.object
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
})

export default PlacesRow
