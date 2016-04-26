import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';


class LoadingView extends Component {
  render () {
    return (
      <View style={STYLES.container}>
        <Text>Loading ...</Text>
      </View>
    )
  }
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default LoadingView;
