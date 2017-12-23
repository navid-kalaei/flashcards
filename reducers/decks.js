import {ADD_DECK} from '../actions/constants'


export default decks = (state={}, action) => {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.title]: 0
            }

        default:
            return state
    }
}