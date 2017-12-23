import React, {Component} from 'react'
import {View, Text} from 'react-native'


class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

        return {
            title
        }
    }

    render() {
        return (
            <View>
                <Text>Deck</Text>
            </View>
        )
    }
}


export default Deck