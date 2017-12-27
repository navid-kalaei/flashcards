import React from 'react'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {TabNavigator} from 'react-navigation'
import {purple, white} from '../utils/colors'
import {Platform} from 'react-native'
import AddDeck from '../components/AddDeck'
import Decks from '../components/Decks'


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


export default Tabs