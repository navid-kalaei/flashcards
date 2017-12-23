import {ADD_CARD, ADD_DECK, FETCH_DECKS} from './constants'

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

export const addCard = ({deck, question, answer}) => ({
    type: ADD_CARD,
    card: {
        question,
        answer
    }
})
