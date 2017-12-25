import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {green, red} from '../utils/colors'


class Quiz extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text h4>{3}/{15}</Text>
                <View style={styles.content}>
                    <Text h2 style={styles.text}>Is golabi golabi?</Text>
                    <TouchableOpacity>
                        <Text style={{color: red}}>Answer</Text>
                    </TouchableOpacity>
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