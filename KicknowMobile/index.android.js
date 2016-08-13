/**
 * KicknowMobile
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import PlacesList from './components/places_list';
import PlaceDetail from './components/place_detail';
import PlaceForm from './components/place_form';
import LoadingView from './components/loading_view';
import { STYLES } from './base_styles';

class KicknowMobile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      places: [],
      loaded: false
    }

    // use the back button to navigate back
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.nav.pop();
      return true;
    });
  }

  componentDidMount() {
    this.fetchPlaces();
  }

  fetchPlaces() {
    const REQUEST_URL = 'https://private-f0df95-kicknow.apiary-mock.com/places';

    fetch(REQUEST_URL, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: 'POST',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(places => this.setState({ places: places, loaded: true }))
      .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message))
      .done();
  }

  placeAction() {
    this.nav.push({ name: 'place_detail' });
  }

  onPlaceFormCancel() {
    this.nav.pop();
  }

  onPlaceFormAdd(place) {
    console.log('Place: ', place);
    this.nav.pop();
  }

  addPlaceAction() {
    this.nav.push({ name: 'place_form' });
  }

  renderScene(route, nav) {
    // routing
    switch (route.name) {
      case 'place_detail':
        return (
          <PlaceDetail place={{name: 'hans otto'}} />
        )
      case 'place_form':
        return (
          <PlaceForm
            onAdd={this.onPlaceFormAdd.bind(this)}
            onCancel={this.onPlaceFormCancel.bind(this)}
          />
        )
      default:
        if(!this.state.loaded) {
          return (
            <LoadingView />
          );
        }

        return (
          <View style={STYLES.container}>
            <PlacesList
              onPlacePress={this.placeAction.bind(this)}
              places={this.state.places}
            />
            <TouchableHighlight
              onPress={this.addPlaceAction.bind(this)}
              style={STYLES.button}
            >
              <Text style={STYLES.buttonText}>Add new Place</Text>
            </TouchableHighlight>
          </View>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'place_detail', index: 0 }}
        ref={nav => this.nav = nav}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

AppRegistry.registerComponent('KicknowMobile', () => KicknowMobile);
