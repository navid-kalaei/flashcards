import React, {Component} from 'react'
import {View, StatusBar, Platform} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import store from './config/store'
import {Constants, Permissions} from 'expo'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {purple, white} from './utils/colors'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import {GRANTED, UNDETERMINED} from './utils/constants'


const Tabs = TabNavigator(
    {
        Decks: {
            screen: Decks,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowRadius: 6,
                shadowOpacity: 1,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3

                }
            }
        }
    }
)


const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    }
})


const AppStatusBar = ({backgroundColor, ...props}) => (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
)


export default class App extends Component {

    state = {
        status: UNDETERMINED
    }

    componentDidMount() {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if (status !== GRANTED) {
                    Permissions.askAsync(Permissions.NOTIFICATIONS)
                        .then(({status}) => (this.setState(() => ({status}))))
                        .catch((e) => console.warn('error in asking permission: ', e))
                }
        })
            .catch((e) => (console.warn('error in getting permission: ', e)))
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
