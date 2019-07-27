import React from 'react';
import { Text, View, Button } from 'react-native';

class DetailsScreen extends React.Component {

    render() {
      console.log('this is detail', this.props)
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }

  export default DetailsScreen