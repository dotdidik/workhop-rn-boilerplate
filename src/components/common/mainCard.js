import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import axios from 'axios'
import {withNavigation} from 'react-navigation'
class MainCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount(){
        axios.get('https://article.baggrek.com/mobile/api/v1/article')
            .then(res => {
                this.setState({
                    arr : res.data.data.result
                })
            })
    }

    render() {
        console.log('data', this.state.arr)
        return (
            <View>
                {
                    this.state.arr.map((person, index) =>
                        <Card key={index}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg' }} />
                                    <Body>
                                        <Text>{person.article.username}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <Text>{person.article.status}</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: person.article.photo.url }} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                </Left>
                                <Body>
                                    <Button transparent 
                                        onPress={() => {
                                            /* 1. Navigate to the Details route with params */
                                            this.props.navigation.navigate('Details', {person});
                                          }}
                                    >
                                        <Icon active name="chatbubbles" />
                                        <Text>{person.comment.length} comments</Text>
                                    </Button>
                                </Body>
                                <Right />
                            </CardItem>
                        </Card>
                    )
                }
            </View>
        );
    }
}

export default withNavigation(MainCard)