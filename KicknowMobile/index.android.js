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
import { ROUTE_MAPPER } from './containers/navigation_bar';


class KicknowMobile extends Component {
  constructor(props, context) {
    super(props, context);

    // use the back button to navigate back
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.nav.pop();
      return true;
    });
  }

  placeAction(place) {
    console.log(place)
    this.nav.push({
      name: 'place_detail',
      title: place.name,
      image: place.logo.contentUrl,
      id: place['@id']
    });
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
    // console.log(route, nav)
    switch (route.name) {
      case 'places_list':
        return (
          <View style={STYLES.container}>
            <PlacesList
              onPlacePress={this.placeAction.bind(this)}
            />
          </View>
        );
      case 'place_detail':
        return (
          <View style={STYLES.container}>
            <PlaceDetail placeId={route.id} />
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
        return (
          <View style={STYLES.container}>
            <PlacesList
              onPlacePress={this.placeAction.bind(this)}
            />
          </View>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'places_list', title:'Kicknow', index: 0 }}
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
