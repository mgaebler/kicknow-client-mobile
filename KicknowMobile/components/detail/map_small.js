import React, {Component} from 'react'

class MapSmall extends Component {
  
  render () {
    return (
      <View style={{flex: 1}}>
        <MapView
          region={{
            latitude: 39.06,
            longitude: -95.22,
          }}
          style={SELF_STYLES.map}
        />
      </View>
    )
  }
}
