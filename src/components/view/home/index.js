import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'TIMELINE',
    };
    render() {
        return (
            <ScrollView>
                    <Text>Home Page</Text>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Details')}
                        title = "Go to details"
                    />
            </ScrollView>
        );
    }
}

export default HomeScreen