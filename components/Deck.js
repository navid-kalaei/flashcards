import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {Text, Button} from 'react-native-elements'
import {blue, red} from '../utils/colors'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'


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
            {deck: title}
        )
    }


    onStartQuiz = () => {
        const {title} = this.props.navigation.state.params
        const {count} = this.props

        clearLocalNotification()
            .then(setLocalNotification)

        this.props.navigation.navigate(
            'Quiz',
            {
                title,
                count
            }
        )
    }

    render() {
        const {title, count} = this.props
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
                        onPress={this.onStartQuiz}
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
        marginBottom: 24
    },
    button: {
        marginBottom: 8
    }
})


const mapStateToProps = (state, {navigation}) => {
    const {title, count} = navigation.state.params
    return {
        count: state.decks[title] || count,
        title
    }
}

export default connect(mapStateToProps)(Deck)