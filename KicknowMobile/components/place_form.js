import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'


class PlaceForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      place: ''
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
          style={[STYLES.button, STYLES.buttonCancel]}
        >
          <Text style={STYLES.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const STYLES = StyleSheet.create({
  button: {
    height: 45,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#3d3d3d',
    justifyContent: 'center',
    marginTop: 6
  },
  buttonCancel: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  input: {}
})

PlaceForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PlaceForm
