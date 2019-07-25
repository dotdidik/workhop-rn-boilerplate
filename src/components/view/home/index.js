import React from 'react';
import { ScrollView } from 'react-native';
import CardStatus from '../../common/statusCard';
import { List, ListItem, Left, Body, Right, Thumbnail, Input, Text, Form, Textarea } from 'native-base'
import UpdateStatus from './updateStatus';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'TIMELINE',
    };
    render() {
        return (
            <ScrollView>
                    <ListItem style={{marginBottom: 20}} avatar button onPress={() => this.props.navigation.navigate('UpdateStatus')}>
                        <Left>
                            <Thumbnail source={{ uri: 'https://avatars2.githubusercontent.com/u/26860501?s=460&v=4' }} />
                        </Left>
                        <Body>
                            <Text>Update Status</Text>
                        </Body>
                        <Right />
                    </ListItem>
                <CardStatus />
            </ScrollView>
        );
    }
}

export default HomeScreen