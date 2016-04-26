import React, {
  Component,
  Image,
  MapView,
  PropTypes,
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
} from 'react-native'

import { STYLES } from '../base_styles';
import LoadingView from './loading_view';

const SELF_STYLES = StyleSheet.create({
  map: {
    height: 150,
    width: 300,
    margin: 10,
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
    const REQUEST_URL = 'https://private-f0df95-kicknow.apiary-mock.com/place';

    fetch(REQUEST_URL, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: 'POST',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(place => this.setState({ place: place, loaded: true }))
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      })
      .done();
  }

  renderImage(photo, key){
    return (
      <Image
        key={key}
        source={{uri: photo.contentUrl}}
        style={{width: 80, height: 80}}
      />
    )
  }

  render() {
    if(!this.state.loaded) {
      return (
        <LoadingView />
      );
    }

    return (

    <View>
      <ToolbarAndroid
        logo={{uri: this.state.place.logo.contentUrl}}
        style={{
          backgroundColor: '#e9eaed',
          height: 56,
        }}
        title={this.state.place.name}
      />
        <View style={{marginTop: 20}}>
          {this.state.place.photos.map(this.renderImage)}
        </View>
        <View>
          <Text>Some Actions here</Text>
        </View>
        <View style={STYLES.container}>
          <Text>{this.state.place.name}</Text>
          <Text>{this.state.place.address.streetAddress}</Text>
          <Text>{this.state.place.address.addressLocality}</Text>
        </View>
        <View>
          <MapView
            region={{
              latitude: 39.06,
              longitude: -95.22,
            }}
            style={SELF_STYLES.map}
          />
        </View>
      </View>
    );
  }
}

PlaceDetail.propTypes = {
  place: PropTypes.object.isRequired
}

export default PlaceDetail
