import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import store from './config/store'
import MainNavigator from './routes/MainNavigator'
import {cleanupDb} from './utils/api'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {purple} from './utils/colors'
import {setLocalNotification} from './utils/helpers'
import AppStatusBar from './components/AppStatusBar'


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
