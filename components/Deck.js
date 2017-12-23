import React, {Component} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {blue, red} from '../utils/colors'

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

        return {
            title
        }
    }

    onAddCard = () => {
        const {title} = this.props.navigation.state.params

        this.props.navigation.navigate(
            'AddCard',
            {deckTitle: title}
        )
    }

    render() {
        const {title, count} = this.props.navigation.state.params
        return (
            <View style={{flex: 1}}>
                <View style={styles.content}>
                    <Text h1 style={styles.text}>{title}</Text>
                    <Text h4 style={styles.text}>{count} cards</Text>
                </View>
                <View style={styles.buttonSection}>
                    <Button
                        onPress={this.onAddCard}
                        large
                        title='Add Card'
                        backgroundColor={blue}
                        buttonStyle={styles.button}
                    />
                    <Button
                        large
                        title='Start Quiz'
                        backgroundColor={red}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    },
    buttonSection: {
        marginBottom: 16
    },
    button: {
        marginBottom: 8
    }
})

export default Deck