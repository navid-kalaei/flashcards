import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Card} from 'react-native-elements'


export default class Decks extends Component {
    render() {
        return(
            <View>
                {decks.map((d, i) => (
                    <Card key={i} title={d.title}>
                        <Text style={{textAlign:'center'}}>{d.count}</Text>
                    </Card>
                ))}
            </View>
        )
    }
}

const decks = [
    {
        title: 'Deck 1',
        count: 20
    },
    {
        title: 'Deck 2',
        count: 35
    },
    {
        title: 'Deck 3',
        count: 45
    }
]
