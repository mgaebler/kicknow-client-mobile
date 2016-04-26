import React, {
  Component,
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

        <TouchableHighlight style={STYLES.button}>
          <Text style={STYLES.buttonText}>
            Add
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
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

export default PlaceForm
