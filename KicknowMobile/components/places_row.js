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
          <View style={STYLES.aside}>
            <Image
              resizeMode={Image.resizeMode.contain}
              style={{width: 72, height: 72}}
              source={{uri: this.props.place.logo.contentUrl}}
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
  listItem: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  aside: {flex:0, width: 80, height: 72},
  title: {
    fontSize: 20,
  }
})

export default PlacesRow
