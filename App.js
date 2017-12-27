import React, {Component} from 'react'
import {View, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import store from './config/store'
import {Constants} from 'expo'
import MainNavigator from './routes/MainNavigator'
import {cleanupDb} from './utils/api'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {purple, white} from './utils/colors'
import {setLocalNotification} from './utils/helpers'


const AppStatusBar = ({backgroundColor, ...props}) => (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
)


export default class App extends Component {

    componentDidMount() {
        // cleanupDb()
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}
