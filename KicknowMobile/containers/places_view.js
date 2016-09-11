import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  Text,
  View
} from 'react-native';

import PlacesRow from '../components/places_row';
import LoadingView from './loading_view';


class PlacesList extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: [],
      loaded: false
    }

  }

  componentDidMount() {
    this.fetchPlaces()
  }

  fetchPlaces() {
    const REQUEST_URL = 'https://private-f0df95-kicknow.apiary-mock.com/places';
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    fetch(REQUEST_URL, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: 'POST',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(places => this.setState({
        dataSource: ds.cloneWithRows(places),
        loaded: true
      }))
      .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message))
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
        
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

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
