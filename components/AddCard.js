import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {FormInput, FormLabel, FormValidationMessage, Button} from 'react-native-elements'
import * as api from '../utils/api'
import {incrementDeckCount} from '../actions/decks'


class AddCard extends Component {

    initialState = {
        formError: false,
        question: '',
        answer: ''
    }

    state = {
        ...this.initialState
    }

    resetState = () => {
        this.setState({...this.initialState})
    }

    handleChange = (field) => (input) => (this.setState(() => ({[field]: input})))

    onSubmit = () => {
        const {question, answer} = this.state
        const {deck} = this.props.navigation.state.params
        const {incrementDeckCount} = this.props
        if (!question || !answer) {
            this.setState(() => ({formError: true}))
        }
        else {
            this.resetState()

            const newCard = {
                deck,
                question,
                answer
            }

            api.addCard(newCard).then(incrementDeckCount(deck))

            this.props.navigation.goBack()
        }
    }

    render() {

        const {answer, question, formError} = this.state

        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel labelStyle={styles.label}>What is the question?</FormLabel>
                    <FormInput value={question} onChangeText={this.handleChange('question')} maxLength={25}/>

                    <FormLabel labelStyle={styles.label}>What is the answer?</FormLabel>
                    <FormInput value={answer} onChangeText={this.handleChange('answer')} maxLength={25}/>

                    {formError &&
                    <FormValidationMessage style={styles.message}>
                        Question and answer cannot be empty.
                    </FormValidationMessage>}

                </View>

                <View style={styles.buttonSection}>
                    <Button onPress={this.onSubmit} large title="Add Card"/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 17
    },
    message: {
        textAlign: 'center'
    },
    buttonSection: {
        marginBottom: 24
    }
})


export default connect(null, {incrementDeckCount})(AddCard)