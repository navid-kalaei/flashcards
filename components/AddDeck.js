import React, {Component} from 'react'
import {View} from 'react-native'
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

    handleChange = (title) => (this.setState(() => ({title})))

    validateForm = (title) => {
        let error = ''

        if (!title) {
            error = NO_INPUT
        }
        else if (this.props.decks.hasOwnProperty()) {
            error = DUPLICATED_INPUT
        }

        this.setState(() => ({'formError': error}))
        return !error
    }

    onSubmit = () => {
        const {dispatch} = this.props
        const {title} = this.state

        if (this.validateForm(title)){
            api.addDeck(title).then(() => dispatch(addDeck(title)))
            // navigate to home
        }

    }

    render() {
        const {formError} = this.state

        return(
            <View style={{flex: 1}}>
                <FormLabel labelStyle={{fontSize: 17}}>What is the title of your new deck?</FormLabel>
                <FormInput onChangeText={this.handleChange} maxLength = {25}/>

                {formError === NO_INPUT &&
                <FormValidationMessage style={{textAlign: 'center'}}>
                    Title Cannot Be Empty
                </FormValidationMessage>}

                {formError === DUPLICATED_INPUT &&
                <FormValidationMessage style={{textAlign: 'center'}}>
                    Title already exists.
                </FormValidationMessage>}

                <Button onPress={this.onSubmit} large title="Add Deck"/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    decks: state.decks
})


export default connect(mapStateToProps)(AddDeck)