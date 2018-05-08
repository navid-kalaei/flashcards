import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {Text, Button, FormInput} from 'react-native-elements'
import {blue, green, red} from '../utils/colors'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'


class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

        return {
            title
        }
    }

    state = {
        title: this.props.title,
        is_title_editable: false
    }

    onAddCard = () => {
        const {title} = this.state

        this.props.navigation.navigate(
            'AddCard',
            {deck: title}
        )
    }


    onStartQuiz = () => {
        const {title} = this.state
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

    onEditTitle = (input) => (this.setState({title: input}))

    onAcceptNewTitle = () => (this.setState({is_title_editable: false}))

    onRejectNewTitle = () => (this.setState({
        title: this.props.title,
        is_title_editable: false
    }))

    render() {
        const {title} = this.state
        const {count} = this.props

        return (
            <View style={{flex: 1}}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => (this.setState({is_title_editable: !this.state.is_title_editable}))}>
                        {/*todo: check the new name is not duplicated*/}
                        { !this.state.is_title_editable ?
                            <Text h1 style={styles.text}>{title}</Text> :
                            <FormInput value={title} onChangeText={this.onEditTitle}/>
                        }
                    </TouchableOpacity>
                    <Text h4 style={styles.text}>{count} cards</Text>
                </View>
                <View style={styles.buttonSection}>
                    {
                        !this.state.is_title_editable ?
                        <View>
                            <Button
                                onPress={this.onAddCard}
                                large
                                title='Add Card'
                                backgroundColor={blue}
                                buttonStyle={styles.button}
                            />
                            {count !== 0 &&
                            <Button
                                onPress={this.onStartQuiz}
                                large
                                title='Start Quiz'
                                backgroundColor={red}
                                buttonStyle={styles.button}
                            />
                            }
                        </View> :
                        <View>
                            <Button
                                onPress={this.onAcceptNewTitle}
                                large
                                title='Done'
                                backgroundColor={green}
                                buttonStyle={styles.button}
                            />
                            <Button
                                onPress={this.onRejectNewTitle}
                                large
                                title='Cancel'
                                backgroundColor={red}
                                buttonStyle={styles.button}
                            />
                        </View>
                    }
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