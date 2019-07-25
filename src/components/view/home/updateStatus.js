import React, { Component } from "react";
import { Content, Textarea, Form, Text, Input, View, Button } from "native-base";
import ImagePicker from 'react-native-image-picker';
import { Image, Platform } from 'react-native'
import axios from 'axios'
export default class UpdateStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: null
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.showImagePicker(options, response => {
            if (response.uri) {
                this.setState({ photo: response })
            }
        })
    }


    uploadHandler() {
        const formdata = new FormData();
        formdata.append('username', "didik")
        formdata.append('status', "BISAAAAAXIOS")
        formdata.append('photo',{
            uri: this.state.photo.uri,
            type: 'image/jpeg',
            name: 'didikdiidk.jpeg'
        })
        axios.post('https://posting.baggrek.com/mobile/api/v1/article',
            formdata
        ).then(res => {
            console.log(res.data)
        })
    }

    render() {
        console.log('this', this.state.photo)
        const { photo } = this.state
        return (
            <View>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                )}
                <Button onPress={this.handleChoosePhoto}>
                    <Text>choose</Text>
                </Button>
                <Button onPress={this.uploadHandler.bind(this)}>
                    <Text>Upload</Text>
                </Button>
            </View>

        );
    }
}