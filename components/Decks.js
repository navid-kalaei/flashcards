import React, {Component} from 'react'
import {Text, FlatList} from 'react-native'
import {Card} from 'react-native-elements'


export default class Decks extends Component {

    renderItem = ({item}) => (
        <Card title={item.title}>
            <Text style={{textAlign:'center'}}>{item.count} Cards</Text>
        </Card>
    )

    render() {
        return(
            <FlatList
                data={decks}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
            />
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
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 3',
        count: 45
    },
    {
        title: 'Deck 15',
        count: 45
    }
]
