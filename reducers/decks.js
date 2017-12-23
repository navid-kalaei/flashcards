import {ADD_DECK, FETCH_DECKS, INCREMENT_DECK_COUNT} from '../actions/constants'


export default decks = (decks={}, action) => {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...decks,
                [action.title]: 0
            }
        case FETCH_DECKS:
            return action.decks
        case INCREMENT_DECK_COUNT:
            return {
                ...decks,
                [action.deck]: decks[action.deck] + 1
            }
        default:
            return decks
    }
}