import React from 'react';
import { Text, View, Button } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Profile',
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* other code from before here */}
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }

  export default ProfileScreen