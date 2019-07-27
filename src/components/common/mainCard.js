import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class MainCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: {
                name: "Didik",
                age: 19,
                photo: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg'
            },
            arr: [
                {
                    name: "Didik 1",
                    age: 19,
                    photo: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg'
                },
                {
                    name: "Didik 2",
                    age: 19,
                    photo: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg'
                },
                {
                    name: "Didik 3",
                    age: 19,
                    photo: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg'
                },
                {
                    name: "Didik 4",
                    age: 19,
                    photo: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <View>
                {
                    this.state.arr.map((person, index) =>
                        <Card key={index}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/tAr72vTJCpF4IF9O5L493CD79kE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg' }} />
                                    <Body>
                                        <Text>{person.name}</Text>
                                        <Text note>{person.age}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{ uri: person.photo }} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 comm</Text>
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