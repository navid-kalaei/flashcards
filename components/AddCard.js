import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import * as api from '../utils/api'


class AddCard extends Component {

    state = {
        formError: false,
        question: '',
        answer: ''
    }

    resetState = () => (this.setState({
        formError: false,
        question: '',
        answer: ''
    }))

    handleChange = (field) => (input) => (this.setState(() => ({[field]: input})))

    onSubmit = () => {
        const {question, answer} = this.state
        const {deck} = this.props.navigation.state.params
        if (!question || !answer) {
            this.setState(() => ({formError: true}))
        }
        else {
            console.log('in else')

            this.resetState()

            const newCard = {
                deck,
                question,
                answer
            }

            api.addCard(newCard)
            // navigate to back
        }
    }

    render() {

        const {answer, question, formError} = this.state

        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <FormLabel labelStyle={{fontSize: 17}}>What is the question?</FormLabel>
                    <FormInput value={question} onChangeText={this.handleChange('question')} maxLength={25}/>

                    <FormLabel labelStyle={{fontSize: 17}}>What is the answer?</FormLabel>
                    <FormInput value={answer} onChangeText={this.handleChange('answer')} maxLength={25}/>

                    {formError &&
                    <FormValidationMessage style={{textAlign: 'center'}}>
                        Question and answer cannot be empty.
                    </FormValidationMessage>}

                </View>

                <View style={{marginBottom: 24}}>
                    <Button onPress={this.onSubmit} large title="Add Card"/>
                </View>
            </View>
        )
    }
}

export default AddCard