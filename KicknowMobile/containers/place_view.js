import React, {
  Component,
  PropTypes,
} from 'react';

import {
  MapView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ActionsBar from '../components/detail/actions_bar';
import AddressField from '../components/detail/address_field';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagesRow from '../components/detail/images_row';
import { STYLES } from '../base_styles';
import LoadingView from './loading_view';


const SELF_STYLES = StyleSheet.create({
  map: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#000000',
  }
});

class PlaceDetail extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loaded: false,
      place: {},
    }
  }

  componentDidMount() {
    this.fetchPlace();
  }

  fetchPlace() {
    console.log('fetching');
    // Mock url
    const REQUEST_URL = 'https://private-f0df95-kicknow.apiary-mock.com/place';

    fetch(REQUEST_URL, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: 'POST',
      body: JSON.stringify({place_id: this.props.place_id}),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(place => this.setState({ place: place, loaded: true }))
      .catch(error => {
        console.log('There is a problem with your fetch operation: ' + error.message);
      })
      .done();
  }

  render() {
    if(!this.state.loaded) {
      return (
        <LoadingView />
      );
    }

    return (
      <View style={{
        flex: 1,
      }} >

        <View style={{
          flex: 1,
          flexDirection: 'column',
        }} >

          {/* Images row */}
          <View style={{
            flex: 1,
            // backgroundColor: 'green'
          }}>
            <ImagesRow images={this.state.place.photos} />
          </View>

          {/* Actions row */}
          <View style={[{ flex: 1 }, STYLES.rowBorderBottom]}>
            <ActionsBar />
          </View>

          {/* Place details row */}
          <View style={[{ flex: 2, marginTop: 16 }, STYLES.contentInner]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <AddressField place={this.state.place} />
            </View>
          </View>

        </View>
      </View>
    );
  }
}

PlaceDetail.propTypes = {
  // place: PropTypes.object.isRequired
  place_id: PropTypes.string.isRequired
}

export default PlaceDetail
