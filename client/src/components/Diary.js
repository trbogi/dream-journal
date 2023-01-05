import {DREAMS, filterBySearchPhrase, sortByDate, groupByYearAndMonth, filterByTime, filterByEmotions} from "../mock-dreams";
import {useState} from "react";
import {useEffect} from "react";
import NoDreams from "./NoDreams";
import DreamItem from "./DreamItem";

function Diary({searchPhrase, fromDate, toDate, tags}) {
    const [dreams, setDreams] = useState(sortByDate(DREAMS));

    const fetchDreams = async () => {
        const response = await fetch('http://localhost:3001/getDreams')
        const data = await response.json()

        if (response.ok){
            setDreams(sortByDate(data))
        }

    }

    useEffect(() => {
        fetchDreams() 
        //setDreams(sortByDate(DREAMS))
        let result = []
            result = filterBySearchPhrase(searchPhrase)
            setDreams(result);
        if (fromDate.length && toDate.length){
            result = filterByTime(fromDate, toDate, result)
            setDreams(result);
        }
        if (tags.length){
            result = filterByEmotions(tags, dreams)
            setDreams(result)
        }
    }, [searchPhrase, fromDate, toDate, tags])

    return (
        <div className="w-full overflow-auto lg:w-[896px]">
            {!dreams.length && <NoDreams/>}
            {groupByYearAndMonth(dreams).map((group) => (
                <div key={group.period}>
                    <h1 className="ml-4 text-xl font-extrabold italic">{group.period}</h1>
                    <ol className="relative border-l mx-6 border-gray-700">
                        {group.dreams.map((dream) => (
                            <DreamItem key={dream.id} dream={dream} searchPhrase={searchPhrase}/>
                        ))
                        }
                    </ol>
                </div>))
            }
        </div>
    );
}

export default Diary;