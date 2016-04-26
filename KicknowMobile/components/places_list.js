import React, {
  Component,
  ListView,
  PropTypes,
  Text,
  View
} from 'react-native';

import PlacesRow from './places_row';


class PlacesList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.places),
    }
  }

  rowClicked () {
    console.log('click')
  }

  renderRow(place) {
    return (
      <PlacesRow
        onRowClick={this.props.onPlacePress}
        place={place}
      />
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

PlacesList.propTypes = {
  onPlacePress: PropTypes.func,
  places: PropTypes
    .arrayOf(PropTypes.objects).isRequired,
}

export default PlacesList;
