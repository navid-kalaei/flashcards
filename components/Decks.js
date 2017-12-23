import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import {Card} from 'react-native-elements'
import {connect} from 'react-redux'
import {fetchDecks} from '../actions/decks'
import * as api from '../utils/api'
import {decksToArray} from '../utils/helpers'

class Decks extends Component {

    componentDidMount() {
        const {dispatch} = this.props
        api.fetchDecks().then(decks => {
            decks = decks || {}
            dispatch(fetchDecks(decks))
        })
    }

    renderItem = ({item}) => (
        <Card title={item.title}>
            <Text style={{textAlign: 'center'}}>{item.count} Cards</Text>
        </Card>
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


const mapStateToProps = (state) => ({
    decks: state.decks
})


export default connect(mapStateToProps)(Decks)