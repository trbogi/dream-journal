import {filterBySearchPhrase, sortByDate, groupByYearAndMonth, filterByTime, filterByEmotions} from "../mock-dreams";
import {useState} from "react";
import {useEffect} from "react";
import NoDreams from "./NoDreams";
import DreamItem from "./DreamItem";

function Diary({searchPhrase, fromDate, toDate, tags}) {
    const [allDreams, setAllDreams] = useState([]);
    const [dreams, setDreams] = useState([]);

    const fetchDreams = async () => {
        const response = await fetch('http://localhost:3001/getDreams')

        if (response.ok){
            const data = await response.json()
            setDreams(sortByDate(data))
            setAllDreams(sortByDate(data))
        }
    }

    useEffect(() => fetchDreams, [])

    useEffect(() => {
        let result = []

        result = filterBySearchPhrase(allDreams, searchPhrase)
        console.log(result)
        
        if (fromDate.length && toDate.length){
            result = filterByTime(fromDate, toDate, result)
        }
        if (tags.length){
            result = filterByEmotions(tags, result)
        }
        console.log(result)
        setDreams(result)
    }, [searchPhrase, fromDate, toDate, tags])

    return (
        <div className="w-full overflow-auto lg:w-[896px]">
            {!dreams.length && <NoDreams/>}
            {groupByYearAndMonth(dreams).map((group) => (
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