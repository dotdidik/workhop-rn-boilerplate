import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import MainCard from '../../common/mainCard';
class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'TIMELINE',
    };
    render() {
        return (
            <ScrollView>
                <MainCard />
            </ScrollView>
        );
    }
}

export default HomeScreen