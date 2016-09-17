import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * @TODO The list entries should also indecate distance.
 */
class PlacesRow extends Component {
  rowItemPressAction () {
    this.props.onRowClick(this.props.place)
  }

  render () {
    // console.log(this.props.place)
    return (
      <TouchableWithoutFeedback onPress={this.rowItemPressAction.bind(this)}>
        <View
          style={STYLES.listItem}
        >
          <View>
            <Image
              resizeMode={Image.resizeMode.contain}
              source={{uri: this.props.place.logo.contentUrl}}
              style={STYLES.listImage}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={STYLES.title}>{this.props.place.name}</Text>
          </View>
          <View>
            <Icon
              name="chevron-right"
              size={32}
              style={{alignSelf: 'center'}}
            />
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
  listImage : {
    marginLeft: 6,
    marginRight: 6,
    width: 64,
    height: 64,
    borderRadius: 999
  },
  listItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  title: {
    fontSize: 20,
  }
})

export default PlacesRow
