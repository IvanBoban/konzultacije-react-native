import React, { Component } from 'react'
import {Text, View, Button, Linking } from 'react-native'
export default class DetailsScreen extends Component {

    static navigationOptions = {
        title: 'Nastavnik'
      };
    render() {
        const { navigation  } = this.props;
        return (
            <View>
            <Text
            style={{
                fontSize: 35,
                marginBottom: 5,
                fontWeight: "bold",
                paddingLeft: 25
            }}
            >{navigation.getParam('name')} </Text>
            
            <Text
            
            style={{
                fontSize: 15,
                marginBottom:10,
                paddingLeft: 10
            }}>Konzultacije (zimski semestar) {navigation.getParam('konz1')} </Text>
            <Text
            
            style={{
                fontSize: 15,
                marginBottom:10,
                paddingLeft: 10
            }}>Konzultacije (zimski semestar) {navigation.getParam('konz2')} </Text>
            <Text
            style={{
                fontSize: 15,
                marginBottom:10,
                paddingLeft: 10
            }}>
            Kabinet : {navigation.getParam('room')} </Text>

            <Button 
            style={{
            backgroundColor: 'rgba(0, 181, 204, 1)'
            }}
            onPress={() => Linking.openURL(`mailto:${navigation.getParam('email')}`) }
             title={`${navigation.getParam('email')}`} />
            </View>
        )
    }
}
