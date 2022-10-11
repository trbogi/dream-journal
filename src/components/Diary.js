import {DREAMS, filterBySearchPhrase, sortByDate, groupByYearAndMonth, filterByTime, filterByEmotions} from "../mock-dreams";
import Highlighter from "react-highlight-words";
import {useState} from "react";
import {useEffect} from "react";

function Diary({searchPhrase, fromDate, toDate, tags}) {
    const [dreams, setDreams] = useState(sortByDate(DREAMS));

    useEffect(() => {
        setDreams(sortByDate(DREAMS))
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
        <div className="max-h-[80%] md:max-h-[70%] overflow-auto lg:min-h-[90%] lg:max-h-[90%]">
            {groupByYearAndMonth(dreams).map((group) => (
                <div key={group.period}>
                    <h1 className="ml-4 text-xl font-extrabold italic">{group.period}</h1>
                    <ol className="relative border-l mx-6 border-gray-700">
                        {group.dreams.map((dream) => (
                        <li key={dream.id} className="ml-6 my-8">
                            <div className="flex justify-between items-center">
                                                    <span
                                                        className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-400" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </span>
                                <h3 className="mb-1 text-lg font-semibold text-white">
                                    <Highlighter
                                        highlightClassName="YourHighlightClass"
                                        searchWords={[searchPhrase]}
                                        autoEscape={true}
                                        textToHighlight={dream.title}
                                    />
                                </h3>
                                <time
                                    className="block mb-2 text-ml font-bold leading-none text-blue-400">{dream.date}
                                </time>
                            </div>
                            {dream.emotions &&
                            <div className="flex w-full flex-wrap mb-4">
                                {dream.emotions.map((emotion) => {
                                    return <span className="bg-blue-300 text-slate-900 text-xs px-2 py-1 mr-2 my-1 rounded-full">{emotion.label}</span>})}
                            </div>
                            }
                            <p className="text-justify font-normal text-slate-400">
                                <Highlighter
                                    highlightClassName="YourHighlightClass"
                                    searchWords={[searchPhrase]}
                                    autoEscape={true}
                                    textToHighlight={dream.text}
                                />
                            </p>
                        </li>))
                        }
                    </ol>
                </div>))
            }
        </div>
    );
}

export default Diary;