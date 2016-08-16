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

import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesList from './containers/places_view';
import PlaceDetail from './containers/place_view';
import PlaceForm from './containers/place_form';
import LoadingView from './containers/loading_view';
import { STYLES } from './base_styles';
import { ROUTE_MAPPER } from './navigator_bar_config';


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
          <View style={STYLES.container}>
            <PlaceDetail place={{name: 'hans otto'}} />
          </View>
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
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={ROUTE_MAPPER}
            style={STYLES.navigatorBar}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('KicknowMobile', () => KicknowMobile);
