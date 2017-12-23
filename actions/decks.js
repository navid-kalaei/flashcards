import {ADD_DECK, FETCH_DECKS} from './constants'

export const addDeck = (title) => {
    return {
        type: ADD_DECK,
        title
    }
}

export const fetchDecks = (decks) => ({
    type: FETCH_DECKS,
    decks
})
