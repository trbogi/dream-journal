export const EMOTIONS = [
    "admiration",
    "adoration",
    "aesthetic appreciation",
    "amusement",
    "anger",
    "anxiety",
    "awe",
    "awkwardness",
    "boredom",
    "calmness",
    "confusion",
    "craving",
    "disgust",
    "empathic pain",
    "entrancement",
    "excitement",
    "fear",
    "horror",
    "interest",
    "joy",
    "nostalgia",
    "relief",
    "romance",
    "sadness",
    "satisfaction",
    "sexual desire",
    "surprise"
]

export const suggestions = EMOTIONS.map((name, index) => ({ value: index, label: name }))

export const sortAlphabetically = (emotions) => emotions.sort((a, b) => a.label.localeCompare(b.label))