import {ADD_DECK} from './constants'
import * as api from '../utils/api'

export const addDeck = (title) => (
    api.addDeck(title).then({
        type: ADD_DECK,
        title
    })
)
