import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ProductsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Products',
    };
    render() {
        return (
            <View>
                <Text> Product </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('PDetails')}
                    title="Go to details"
                />
            </View>
        )
    }
}
