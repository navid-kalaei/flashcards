import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {Text, Button} from 'react-native-elements'
import * as api from '../utils/api'
import {green, lightPurp, orange, red} from '../utils/colors'


class Quiz extends Component {

    state = {
        index: 0,
        deck: [],
        showQuestion: true,
        correctCounter: 0
    }

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

        return {
            title
        }
    }

    componentDidMount() {
        const {title} = this.props.navigation.state.params

        api.fetchDeck(title).then(deck => (this.setState(() => ({deck}))))
    }

    togglePage = () => (this.setState(() => {
        const {showQuestion} = this.state
        this.setState(() => ({showQuestion: !showQuestion}))
    }))

    onCorrect = () => {
        this.setState((state) => ({
            index: state.index + 1,
            correctCounter: state.correctCounter + 1
        }))
    }

    onIncorrect = () => (this.setState((state) => ({index: state.index + 1})))

    onRetake = () => (this.setState(() => ({index: 0, correctCounter: 0, showQuestion: true})))

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        }))
    }

    render() {

        const {count} = this.props.navigation.state.params
        const {index, showQuestion, correctCounter} = this.state

        if (index === count) {
            return (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text h1 style={styles.text}>Result:</Text>
                        <Text h4 style={styles.text}>{correctCounter}/{count}</Text>
                    </View>
                    <View style={styles.buttonSection}>
                        <Button
                            onPress={this.toHome}
                            large
                            title='Decks'
                            backgroundColor={lightPurp}
                            buttonStyle={styles.button}
                        />
                        <Button
                            onPress={this.onRetake}
                            large
                            title='Retake'
                            backgroundColor={orange}
                            buttonStyle={styles.button}
                        />
                    </View>
                </View>
            )
        }

        const isDeckFetched = this.state.deck.length
        const question = isDeckFetched ? this.state.deck[index].question : ''
        const answer = isDeckFetched ? this.state.deck[index].answer : ''

        return (
            <View style={styles.container}>
                <Text h4>{index + 1}/{count}</Text>
                <View style={styles.content}>
                    {isDeckFetched
                        ? <View style={styles.content}>
                            <Text h2 style={styles.text}>{showQuestion ? question : answer}</Text>
                            <TouchableOpacity onPress={this.togglePage}>
                                <Text style={{color: red}}>{showQuestion ? 'Answer' : 'Question'}</Text>
                            </TouchableOpacity>
                        </View>
                        : <Text>Loading Questions</Text>}
                </View>
                <View style={styles.buttonSection}>
                    <Button
                        onPress={this.onCorrect}
                        large
                        title='Correct'
                        backgroundColor={green}
                        buttonStyle={styles.button}
                    />
                    <Button
                        onPress={this.onIncorrect}
                        large
                        title='Incorrect'
                        backgroundColor={red}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    },
    buttonSection: {
        marginBottom: 24
    },
    button: {
        marginBottom: 8
    }
})


export default Quiz