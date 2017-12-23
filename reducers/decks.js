import {ADD_DECK, FETCH_DECKS} from '../actions/constants'


export default decks = (decks={}, action) => {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...decks,
                [action.title]: 0
            }
        case FETCH_DECKS:
            return action.decks
        default:
            return decks
    }
}