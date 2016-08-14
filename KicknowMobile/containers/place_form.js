import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { STYLES } from '../base_styles';


class PlaceForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      place: '',
      valid: false,
    }
  }
  render() {
    return (
      <View style={STYLES.container}>
        <Text>Foo</Text>

        <TextInput style={STYLES.input} />

        <TouchableHighlight
          onPress={this.props.onAdd}
          style={STYLES.button}
        >
          <Text style={STYLES.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.onCancel}
          style={[STYLES.button, { backgroundColor: '#666' }]}
        >
          <Text style={STYLES.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
        
      </View>
    )
  }
}


PlaceForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PlaceForm
