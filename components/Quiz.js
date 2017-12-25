import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Button} from 'react-native-elements'
import * as api from '../utils/api'
import {green, red} from '../utils/colors'


class Quiz extends Component {

    state = {
        index: 0,
        deck: []
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

    render() {

        const {count} = this.props.navigation.state.params
        const {deck, index} = this.state

        return (
            <View style={styles.container}>
                <Text h4>{index+1}/{count}</Text>
                <View style={styles.content}>
                    {deck.length
                    ? <View style={styles.container}>
                        <Text h2 style={styles.text}>{deck[index].question}</Text>
                        <TouchableOpacity>
                            <Text style={{color: red}}>Answer</Text>
                        </TouchableOpacity>
                     </View>
                    : <Text>Loading Questions</Text>}
                </View>
                <View style={styles.buttonSection}>
                    <Button
                        large
                        title='Correct'
                        backgroundColor={green}
                        buttonStyle={styles.button}
                    />
                    <Button
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
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
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