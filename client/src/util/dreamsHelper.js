import moment from 'moment'

export const filterBySearchPhrase = (dreams, str) => {
  return dreams.filter(dream => {
      return dream.title.toLowerCase().includes(str.toLowerCase()) ||
          dream.text.toLowerCase().includes(str.toLowerCase())
  })
}

export const sortByDate = (dreams) => {
    return dreams.sort((a,b)=> new Date(b.date) - new Date(a.date));
}

export const groupByYearAndMonth = (dreams) => {
    if (!dreams) return
    const groupedMap = dreams.reduce(
        (entryMap, e) => entryMap.set(getYearAndMonth(e.date), [...entryMap.get(getYearAndMonth(e.date))||[], e]),
        new Map()
    )
    let arrayOfDreamByPeriod = []
    groupedMap.forEach((value, key) => {arrayOfDreamByPeriod.push({period: key, dreams: value})})
    return arrayOfDreamByPeriod
}

function getYearAndMonth(stringDate) {
    return moment(stringDate).format('YYYY. MMMM')
}

export const filterByTime= (from, to, dreams) =>{
    return dreams.filter(dream => moment(from).isBefore(moment(dream.date)) && moment(to).isAfter(moment(dream.date)))
}

export const filterByEmotions= (tags, dreams) =>{
    if (!tags.length){
        return dreams
    }
    return dreams.filter(dream => hasTags(dream, tags))
}

const hasTags = (dream, tags) => {
    if (!dream.emotions){
        return false
    }
    const dreamEmotionValues = dream.emotions.map(emotion => emotion._id)
    const tagValues = tags.map(emotion => emotion._id) || []

   for (const tagValue of tagValues) {
        if (!dreamEmotionValues.includes(tagValue)){
            return false
        }
    }

    return true
}