import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import axios from 'axios'

export default class CardStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStatus: []
    }
  }

  componentDidMount() {
    axios.get('https://posting.baggrek.com/mobile/api/v1/article')
      .then(res => {
        this.setState({
          allStatus: res.data.data.result
        })
      })
  }

  render() {
    console.log('status', this.state.allStatus)
    return (
      <View>
        {
          this.state.allStatus.map((status, index) =>
            <Card key={index}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: status.article.photo.url }} />
                  <Body>
                    <Text><Text>{status.article.username}</Text></Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <Text>{status.article.status}</Text>
              <CardItem cardBody>
                
                <Image source={{ uri: status.article.photo.url }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text> {status.comment.length} comment</Text>
                  </Button>
                </Left>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          )
        }
      </View>
    );
  }
}