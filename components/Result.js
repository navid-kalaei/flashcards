import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {lightPurp, orange} from '../utils/colors'


const Result = (props) => {

    const {correctCounter, count, onRetake, onGoBack} = props

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text h1 style={styles.text}>Result:</Text>
                <Text h4 style={styles.text}>{correctCounter}/{count}</Text>
            </View>
            <View style={styles.buttonSection}>
                <Button
                    onPress={onRetake}
                    large
                    title='Retake'
                    backgroundColor={lightPurp}
                    buttonStyle={styles.button}
                />
                <Button
                    onPress={onGoBack}
                    large
                    title='Go Back'
                    backgroundColor={orange}
                    buttonStyle={styles.button}
                />
            </View>
        </View>
    )
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

export default Result