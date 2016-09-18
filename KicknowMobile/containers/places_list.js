import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import PlacesRow from '../components/places_row';
import LoadingView from './loading_view';

import Icon from 'react-native-vector-icons/MaterialIcons';


/**
  * @TODO: Places list must be filterable
  * Add a search box
  */
class PlacesList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: [],
      loaded: false,
    }

  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
        this.fetchPlaces().bind(this)
      },
      (error) => {
        this.fetchPlaces()
        alert('geolocation is not available')
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000
      }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });

    this.fetchPlaces()

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  fetchPlaces(searchString='') {
    const REQUEST_URL = 'https://private-f0df95-kicknow.apiary-mock.com/places';
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    fetch(REQUEST_URL, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: 'POST',
      body: JSON.stringify({
        search_string: searchString,
        geo_coordinates: {
          "@context": "http://schema.org",
          "@type": "GeoCoordinates",
          "latitude": "40.75",
          "longitude": "73.98"
        },
      }),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(places => this.setState({
        dataSource: ds.cloneWithRows(places),
        loaded: true
      }))
      .catch(error => console.log('There is a problem with your fetch operation: ' + error.message))
      .done();
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
    if(this.state.loaded){
      return (
        <View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                flex: 1,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
              }}
              onChangeText={(text) => this.fetchPlaces(text)}
              placeholder='Search'
            />
            {/* <TouchableHighlight onPress={() => false}>
              <Icon
                name='filter-list'
                size={32}
              />
            </TouchableHighlight> */}

          </View>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />

        </View>

      );
    } else {
      return (
          <LoadingView />
      );
    }
  }
}

// PlacesList.propTypes = {
//   onPlacePress: PropTypes.func,
//   places: PropTypes
//     .arrayOf(PropTypes.object).isRequired,
// }

export default PlacesList;
