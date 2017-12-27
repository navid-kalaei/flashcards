import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchDecks} from '../actions/decks'
import * as api from '../utils/api'
import {decksToArray} from '../utils/helpers'


class Decks extends Component {

    componentDidMount() {
        const {fetchDecks} = this.props
        api.fetchDecks().then(decks => {
            decks = decks || {}
            fetchDecks(decks)
        })
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => (this.props.navigation.navigate(
            'Deck',
            {
                title: item.title,
                count: item.count
            }
        ))}>
            <Card title={item.title}>
                {/*{console.log(item, item)}*/}
                <Text style={{textAlign: 'center'}}>{item.count} Cards</Text>
            </Card>
        </TouchableOpacity>
    )

    render() {
        const decks = this.props.decks || {}
        const arrayDecks = decksToArray(decks)
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={arrayDecks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}


const mapStateToProps = ({decks}) => ({decks})


export default connect(mapStateToProps, {fetchDecks})(Decks)