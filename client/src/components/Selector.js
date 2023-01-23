import { useEffect, useState } from "react";
import { sortAlphabetically } from "../util/emotionsHelper";

function Selector({mainStyle, tagStyle, setEmotions, emotions}) {
    const [suggestions, setSuggestions] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState([])
    const [notSelectedValues, setNotSelectedValues] = useState([])
    const [searchPhrase, setSearchPhrase] = useState("")
    const [inputValue, setInputValue] = useState("")

    const fetchEmotions = async () => {
        const response = await fetch('https://dream-journal-api.onrender.com/api/emotions')
        const data = await response.json()

        if (emotions){
            let notSelected= data
            for (const emotion of emotions) {
                notSelected = notSelected.filter((em) => em._id !== emotion._id)
            }

            setSelectedValues([...emotions])
            setSuggestions(notSelected) 
            setNotSelectedValues(notSelected)
        }else{
            setSuggestions(data) 
            setNotSelectedValues(data)
        }
    }

    const addEmotion = (emotion) => {
        if (!selectedValues.some(selected => selected._id === emotion._id)){
            setSelectedValues([...selectedValues, emotion])
            setNotSelectedValues(sortAlphabetically(notSelectedValues.filter(notSelected => notSelected._id !== emotion._id)))
            setSearchPhrase("")
            setInputValue("")
        }

    }

    const deleteEmotion = (e, emotion) => {
        e.preventDefault()
        e.stopPropagation()
        if (selectedValues.some(selected => selected._id === emotion._id)){
            setSelectedValues(selectedValues.filter((selected) => selected._id !== emotion._id))
            setNotSelectedValues(sortAlphabetically([...notSelectedValues, emotion]))
        }
    }

    const searchEmotion = (e) => {
        setInputValue(e.target._id)
        setSearchPhrase(e.target._id)
    }

    useEffect(() => {
        fetchEmotions()
    }, [])


    useEffect(() => {
        setSuggestions(notSelectedValues.filter((emotion) => emotion.label.includes(searchPhrase)))
        setEmotions(selectedValues)
    }, [searchPhrase, notSelectedValues])

    return (
        <div tabIndex={0} className={`relative w-full my-2 flex rounded-lg ${mainStyle} text-xs text-slate-900 px-1 py-1 min-h-max`}
             onBlur={() => setIsOpen(false)}
             onClick={() => setIsOpen(prev => !prev)}
        >
            <span className="flex flex-wrap grow gap-1 items-center">
                {selectedValues.map((option, index) =>
                    (<span key={index} className={`${tagStyle} items-center word-break border border-slate-500 rounded-full px-2 truncate`}>
                        {option.label}
                        <button className="ml-1 text-slate-600 hover:text-blue-500" onClick={(e) => deleteEmotion(e,option)}>&times;</button>
                    </span>))}
                <input className={`${mainStyle} focus:outline-0`} placeholder="Search emotions..." onChange={(e) =>searchEmotion(e)} value={inputValue} type="text"/>
            </span>
            <button className="text-slate-600 text-sm hover:text-blue-500" onClick={() => {
                setSelectedValues([])
                setNotSelectedValues(suggestions)
            }}>&times;</button>
            <ul className={`absolute w-full top-full left-0 max-h-40 overflow-y-auto ${mainStyle} border border-white shadow-lg z-[1000] mt-1 rounded-lg py-1 ${isOpen? "block": "hidden"} `}>
                {!suggestions.length && <li>No matches found</li>}
                {suggestions.map((option) =>
                    (<li key={option._id} className="rounded-lg px-2 hover:bg-slate-400 hover:cursor-pointer"
                        onMouseDown={() => addEmotion(option)}
                        >
                        {option.label}
                    </li>))}
            </ul>
        </div>
    )
}export default Selector