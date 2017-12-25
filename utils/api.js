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
    AsyncStorage.getItem(`${FLASHCARDS_KEY}:${title}`).then(JSON.parse)
)

export const addCard = ({deck, question, answer}) => (
    fetchDeck(deck)
        .then(JSON.parse)
        .then(values => {
            values.push({
                question,
                answer
            })

            console.log('in fetchDeck, values: ', values)

            return AsyncStorage.setItem(`${FLASHCARDS_KEY}:${deck}`, JSON.stringify(values))
        })
        .then(
            fetchDecks
        )
        .then(decks => {
            decks[deck]++
            console.log('in fetchDecks, decks: ', decks)
            return AsyncStorage.setItem(FLASHCARDS_DECKS_KEY, JSON.stringify(decks))
        })
)