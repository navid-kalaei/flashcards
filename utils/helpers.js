import {AsyncStorage} from 'react-native'
import {Permissions, Notifications} from 'expo'
import {
    DAY,
    GRANTED,
    HIGH,
    FLASHCARDS_NOTIFICATION_KEY,
    NOTIFICATION_BODY,
    NOTIFICATION_TITLE,
    NOTIFICATION_HOUR,
    NOTIFICATION_MINUTE
} from './constants'


export const decksToArray = (decks) => (
    Object.keys(decks).reduce((arrayDeck, title) => {
        arrayDeck.push({
            title,
            count: decks[title]
        })
        return arrayDeck
    }, [])
)

export const clearLocalNotification = () => (
    AsyncStorage.removeItem(FLASHCARDS_NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
)

export const createNotification = () => ({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
    ios: {
        sound: true
    },
    android: {
        sound: true,
        priority: HIGH,
        sticky: false,
        vibrate: true
    }
})

export const setLocalNotification = () => (
    AsyncStorage.getItem(FLASHCARDS_NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === GRANTED) {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(NOTIFICATION_HOUR)
                            tomorrow.setMinutes(NOTIFICATION_MINUTE)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: DAY

                                }
                            )

                            AsyncStorage.setItem(FLASHCARDS_NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
)