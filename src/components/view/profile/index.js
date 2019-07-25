import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Profile',
    };
    render() {
      return (
        <ScrollView>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>GAGAGAG</Text>
          </View>
        </ScrollView>
      );
    }
  }

  export default ProfileScreen