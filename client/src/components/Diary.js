import { filterBySearchPhrase, sortByDate, groupByYearAndMonth, filterByTime, filterByEmotions } from "../util/dreamsHelper";
import { useState } from "react";
import { useEffect } from "react";
import NoDreams from "./NoDreams";
import DreamItem from "./DreamItem";
import LoadingSpinner from "./LoadingSpinner";
import { useDreamsContext } from "../hooks/useDreamsContext";
const { REACT_APP_API_URL } = process.env

function Diary({searchPhrase, fromDate, toDate, tags}) {
    const [currentDreams, setCurrentDreams] = useState(null);
    const {dreams, dispatch} = useDreamsContext()
    const [loadingDreams, setLoadingDreams] = useState(false)

    const fetchDreams = async () => {
        setLoadingDreams(true)
        const response = await fetch(REACT_APP_API_URL+ '/api/dreams')
        const data = await response.json()

        if (response.ok){
            dispatch({type: 'SET_DREAMS', payload: data})
            setLoadingDreams(false)
            setCurrentDreams(sortByDate(data))
        }
        setLoadingDreams(false)
    }

    useEffect(() => fetchDreams, [dispatch])

    useEffect(() => {
        let result = []

        result = filterBySearchPhrase(dreams, searchPhrase)
        
        if (fromDate.length && toDate.length){
            result = filterByTime(fromDate, toDate, result)
        }
        if (tags.length){
            result = filterByEmotions(tags, result)
        }
        setCurrentDreams(result)
    }, [dreams, searchPhrase, fromDate, toDate, tags])

    return (
        <div className="w-full overflow-auto lg:w-[896px]">
            {loadingDreams &&  <LoadingSpinner/>}
            {!loadingDreams && currentDreams && !currentDreams.length && <NoDreams/>}
            {currentDreams && groupByYearAndMonth(currentDreams).map((group) => (
                <div key={group.period}>
                    <h1 className="ml-4 text-xl font-extrabold italic">{group.period}</h1>
                    <ol className="relative border-l mx-6 border-gray-700">
                        {group.dreams.map((dream) => (
                            <DreamItem key={dream._id} dream={dream} searchPhrase={searchPhrase}/>
                        ))
                        }
                    </ol>
                </div>))
            }
        </div>
    );
}

export default Diary;