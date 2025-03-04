const emojiDict = {
    "love": ["❤️", "😍", "🥰"],
    "pizza": ["🍕", "🍔", "🍟"],
    "happy": ["😄", "😊", "😎"],
    "fun": ["🤣", "🤪", "😜"],
    "cat": ["😺", "🐱", "😸"],
    "dog": ["🐶", "🐕", "🐩"],
    "head": ["🤯", "🧠", "🧠"],
    "clown": ["🤡", "👹", "🃏"],
    "awesome": ["🌟", "🔥", "💥"],
    "party": ["🎉", "🥳", "🎈"],
    "coffee": ["☕", "🍵", "🥤"],
}

export const translateToEmojis = (sentence) => {
    const words = sentence.split(" ")
    let translatedSentence = words.map(word => {
        word = word.toLowerCase()
        if (emojiDict[word]) {
            const emojis = emojiDict[word]
            return emojis[Math.floor(Math.random() * emojis.length)]
        } else {
            return word
        }
    })

    return translatedSentence.join(" ")
}