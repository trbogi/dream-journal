import {filterBySearchPhrase, sortByDate, groupByYearAndMonth, filterByTime, filterByEmotions} from "../mock-dreams";
import {useState} from "react";
import {useEffect} from "react";
import NoDreams from "./NoDreams";
import DreamItem from "./DreamItem";
import { useDreamsContext } from "../hooks/useDreamsContext";

function Diary({searchPhrase, fromDate, toDate, tags}) {
    const [currentDreams, setCurrentDreams] = useState([]);
    const {dreams, dispatch} = useDreamsContext()

    const fetchDreams = async () => {
        const response = await fetch('http://localhost:3001/api/dreams')
        const data = await response.json()

        if (response.ok){
            dispatch({type: 'SET_DREAMS', payload: data})

            setCurrentDreams(sortByDate(data))
        }
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
            {!currentDreams.length && <NoDreams/>}
            {groupByYearAndMonth(currentDreams).map((group) => (
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