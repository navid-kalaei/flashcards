import {AsyncStorage} from 'react-native'


const FLASHCARDS_KEY = 'Flashcards'
const FLASHCARDS_DECKS_KEY = 'Flashcards:decks'

export const removeAllDecks = () => (
    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys))
)

export const addDeck = (title) => (
    AsyncStorage.setItem(`${FLASHCARDS_KEY}:${title}`, JSON.stringify(Array()))
        .then(AsyncStorage.mergeItem(FLASHCARDS_DECKS_KEY, JSON.stringify({
            [title]: 0
        })))
)

export const fetchDecks = () => (
    AsyncStorage.getItem(FLASHCARDS_DECKS_KEY).then(JSON.parse)
)

export const fetchDeck = (title) => (
    AsyncStorage.getItem(`${FLASHCARDS_KEY}:${title}`)
)