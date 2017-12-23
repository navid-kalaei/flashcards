import {ADD_DECK, FETCH_DECKS, INCREMENT_DECK_COUNT} from './constants'

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

export const incrementDeckCount = (deck) => ({
    type: INCREMENT_DECK_COUNT,
    deck
})
