import React, {Component} from 'react'
import {View} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage, Button} from 'react-native-elements'


export default class AddDeck extends Component {

    state = {
        isFormValidated: true,
        title: ''
    }

    handleChange = (title) => (this.setState(() => ({title})))

    validateForm = (isValid) => (this.setState(() => ({'isFormValidated': isValid})))

    onSubmit = () => {
        const {title} = this.state

        if (title.length) {
            this.validateForm(true)
        }
        else {
            this.validateForm(false)
        }
    }

    render() {
        const {isFormValidated} = this.state

        return(
            <View style={{flex: 1}}>
                <FormLabel labelStyle={{fontSize: 17}}>What is the title of your new deck?</FormLabel>
                <FormInput onChangeText={this.handleChange} maxLength = {25}/>
                {!isFormValidated && <FormValidationMessage style={{textAlign: 'center'}}>Title Cannot Be Empty</FormValidationMessage>}
                <Button onPress={this.onSubmit} large title="Add Deck"/>
            </View>
        )
    }
}