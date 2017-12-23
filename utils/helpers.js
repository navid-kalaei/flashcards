export const decksToArray = (decks) => (
    Object.keys(decks).reduce((arrayDeck, title) => {
        arrayDeck.push({
            title,
            count: decks[title]
        })
        return arrayDeck
    }, [])
)