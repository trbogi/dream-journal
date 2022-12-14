import moment from 'moment';
let maxId = 7

export const DREAMS = [
    {id: 1,
        date: "2022-08-09",
        title: "Magical dream",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet varius sem vel vehicula. Proin lacinia neque ut volutpat lacinia. Morbi pretium augue vel purus ornare iaculis. Proin id ultrices est, at elementum justo. Aliquam fermentum sagittis interdum. Nullam eleifend, enim nec commodo faucibus, felis nulla feugiat purus, non mattis sapien elit hendrerit nisi. Pellentesque porttitor, lectus a bibendum tincidunt, nisi velit lobortis orci, ac lacinia velit ipsum dignissim felis. Nulla non pretium enim, nec placerat odio. Maecenas vel tortor in tortor efficitur volutpat. Phasellus ac rutrum quam. Maecenas at neque massa. Cras eu ipsum eu erat vehicula porttitor. Suspendisse at tellus nec urna vehicula egestas. Donec eget leo ligula. Morbi ut ultrices odio, ac consectetur risus.",
        emotions: [{value:15, label: "excitement"}, {value:1, label: "adoration"}]},
    {id: 2,
        date: "2022-09-09",
        title: "Worst nightmare",
        text: "Integer eu sollicitudin ante. Nullam dui tellus, egestas ut orci quis, tristique finibus ante. Quisque porttitor eleifend quam. In maximus velit quis velit ornare, eget pretium est hendrerit. Aliquam erat volutpat. Pellentesque ut arcu dolor. Duis id magna risus. Curabitur sit amet rutrum urna. Proin quis sem feugiat, viverra neque vitae, rutrum lorem. Nam fringilla arcu nisi, id ornare leo varius quis."},
    {id: 3,
        date: "2022-09-19",
        title: "Exam",
        text: "Donec sit amet tortor in elit porttitor auctor id sed diam. Nunc ipsum mi, tempor eget efficitur in, tristique eget lectus. Nullam commodo nisl porttitor, mattis libero vitae, sollicitudin mauris. In eu commodo massa. Curabitur ultrices eros et aliquet luctus. Nam egestas facilisis tellus, mattis rutrum lectus euismod at. Vivamus convallis pulvinar odio, consequat varius sem viverra vel. Cras tincidunt finibus nunc sed malesuada. Donec quis accumsan metus, vitae aliquet dolor. In luctus ornare enim, non vulputate nulla ultrices a. Proin imperdiet, enim ut consectetur tristique, nisi augue gravida quam, et condimentum ante lacus id dui. Donec blandit et urna vitae ultrices. Nulla at fermentum leo, sit amet pellentesque arcu."},
    {id: 4,
        date: "2022-09-20",
        title: "The craziest dream in my life",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit massa vitae velit convallis, interdum commodo erat gravida. Vivamus quis lacus non metus ultrices consectetur. Sed lorem tellus, volutpat in tempor vel, commodo et quam. Sed ut ligula sollicitudin, pretium metus et, porta urna. Donec sodales placerat eros in laoreet. Pellentesque augue erat, tincidunt eu pharetra quis, semper at ex. Cras sed ullamcorper leo, vehicula convallis turpis. Morbi imperdiet augue nunc, a ultricies lacus sagittis a. In ultrices tristique nibh in feugiat.\n" +
            "\n" +
            "Duis gravida ipsum nunc, sit amet sagittis est laoreet nec. Nunc nec nulla urna. Praesent pharetra lorem vel ante gravida, a congue magna placerat. Pellentesque tristique, magna et tincidunt fermentum, dolor dui luctus velit, sed imperdiet tellus enim id lorem. Sed vulputate mollis neque eget auctor. Nullam in viverra purus, euismod ornare lacus. Suspendisse non sapien tellus. Ut condimentum faucibus iaculis. Mauris lobortis tristique fringilla. Duis lacinia viverra nulla, a sodales nibh bibendum vel. Donec in lorem bibendum nulla vestibulum consectetur. Nullam placerat pulvinar massa, quis luctus arcu condimentum molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras maximus, nunc non mollis molestie, tellus odio lobortis purus, at fermentum arcu mi quis eros. Aliquam suscipit dolor nunc, nec molestie tellus convallis et.",
        emotions: [{value:15, label: "excitement"}, {value:19, label: "joy"}, {value:20, label: "nostalgia"} ]},
    {id: 5,
        date: "2021-07-19",
        title: "Unsuccessful interview",
        text: "Donec sit amet tortor in elit porttitor auctor id sed diam. Nunc ipsum mi, tempor eget efficitur in, tristique eget lectus. Nullam commodo nisl porttitor, mattis libero vitae, sollicitudin mauris. In eu commodo massa. Curabitur ultrices eros et aliquet luctus. Nam egestas facilisis tellus, mattis rutrum lectus euismod at. Vivamus convallis pulvinar odio, consequat varius sem viverra vel. Cras tincidunt finibus nunc sed malesuada. Donec quis accumsan metus, vitae aliquet dolor. In luctus ornare enim, non vulputate nulla ultrices a. Proin imperdiet, enim ut consectetur tristique, nisi augue gravida quam, et condimentum ante lacus id dui. Donec blandit et urna vitae ultrices. Nulla at fermentum leo, sit amet pellentesque arcu.",
        emotions: [{value:7, label: "awkwardness"}, {value:10, label: "confusion"}]},
    {id: 6,
        date: "2021-08-19",
        title: "Newborn puppies",
        text: "Donec sit amet tortor in elit porttitor auctor id sed diam. Nunc ipsum mi, tempor eget efficitur in, tristique eget lectus. Nullam commodo nisl porttitor, mattis libero vitae, sollicitudin mauris. In eu commodo massa. Curabitur ultrices eros et aliquet luctus. Nam egestas facilisis tellus, mattis rutrum lectus euismod at. Vivamus convallis pulvinar odio, consequat varius sem viverra vel. Cras tincidunt finibus nunc sed malesuada. Donec quis accumsan metus, vitae aliquet dolor. In luctus ornare enim, non vulputate nulla ultrices a. Proin imperdiet, enim ut consectetur tristique, nisi augue gravida quam, et condimentum ante lacus id dui. Donec blandit et urna vitae ultrices. Nulla at fermentum leo, sit amet pellentesque arcu."},
    {id: 7,
        date: "2022-10-17",
        title: "Training",
        text: "Donec sit amet tortor in elit porttitor auctor id sed diam. Nunc ipsum mi, tempor eget efficitur in, tristique eget lectus. Nullam commodo nisl porttitor, mattis libero vitae, sollicitudin mauris. In eu commodo massa. Curabitur ultrices eros et aliquet luctus. Nam egestas facilisis tellus, mattis rutrum lectus euismod at. Vivamus convallis pulvinar odio, consequat varius sem viverra vel. Cras tincidunt finibus nunc sed malesuada. Donec quis accumsan metus, vitae aliquet dolor. In luctus ornare enim, non vulputate nulla ultrices a. Proin imperdiet, enim ut consectetur tristique, nisi augue gravida quam, et condimentum ante lacus id dui. Donec blandit et urna vitae ultrices. Nulla at fermentum leo, sit amet pellentesque arcu.",
        emotions: [{value:1, label: "adoration"}]},
]

export const addNewDream = (date, title, emotions, text) => {
    DREAMS.push({id: maxId + 1, date: date, title: title, emotions: emotions, text: text})
    maxId = maxId + 1
}

export const filterBySearchPhrase = (str) => {
  return DREAMS.filter(dream => {
      return dream.title.toLowerCase().includes(str.toLowerCase()) ||
          dream.text.toLowerCase().includes(str.toLowerCase())
  })
}

export const sortByDate = (dreams) => {
    return dreams.sort((a,b)=> new Date(b.date) - new Date(a.date));
}

export const groupByYearAndMonth = (dreams) => {
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
    const dreamEmotionValues = dream.emotions.map(emotion => emotion.value)
    const tagValues = tags.map(emotion => emotion.value) || []

   for (const tagValue of tagValues) {
        if (!dreamEmotionValues.includes(tagValue)){
            return false
        }
    }

    return true
}