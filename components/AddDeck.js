import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {FormInput, FormLabel, FormValidationMessage, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import {addDeck} from '../actions/decks'
import * as api from '../utils/api'
import {NO_INPUT, DUPLICATED_INPUT} from '../utils/constants'

class AddDeck extends Component {

    state = {
        formError: '',
        title: ''
    }

    toHome = () => {
        this.props.navigation.goBack('AddDeck')
    }

    handleChange = (title) => (this.setState(() => ({title})))

    validateForm = (title) => {
        let error = ''

        if (!title) {
            error = NO_INPUT
        }
        else if (this.props.decks.hasOwnProperty(title)) {
            error = DUPLICATED_INPUT
        }

        this.setState(() => ({'formError': error}))
        return !error
    }

    onSubmit = () => {
        const {title} = this.state
        const {addDeck} = this.props

        if (this.validateForm(title)) {
            api.addDeck(title).then(addDeck(title))
            this.setState(() => ({title: ''}))
            this.toHome()
        }

    }

    render() {
        const {title, formError} = this.state

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FormLabel labelStyle={styles.label}>What is the title of your new deck?</FormLabel>
                    <FormInput value={title} onChangeText={this.handleChange} maxLength={25}/>

                    {formError === NO_INPUT &&
                    <FormValidationMessage style={styles.message}>
                        Title Cannot Be Empty
                    </FormValidationMessage>}

                    {formError === DUPLICATED_INPUT &&
                    <FormValidationMessage style={styles.message}>
                        Title already exists.
                    </FormValidationMessage>}
                </View>
                <View style={styles.buttonSection}>
                    <Button onPress={this.onSubmit} large title="Add Deck"/>
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


const mapStateToProps = ({decks}) => ({decks})


export default connect(mapStateToProps, {addDeck})(AddDeck)