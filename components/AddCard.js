import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import * as api from '../utils/api'
import {NO_INPUT} from '../utils/constants'


class AddCard extends Component {
    render() {
        return(
            <View>
                <Text>Add Card!</Text>
            </View>
        )
    }
}

export default AddCard