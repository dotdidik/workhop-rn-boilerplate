import React from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'TIMELINE',
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

export default HomeScreen