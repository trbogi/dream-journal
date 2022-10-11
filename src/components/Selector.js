import {useEffect, useState} from "react";
import {suggestions as allEmotions, sortAlphabetically} from "../mock-emotions";


function Selector({tags, setTags}) {
    const [suggestions, setSuggestions] = useState(allEmotions)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState([])
    const [notSelectedValues, setNotSelectedValues] = useState(allEmotions)
    const [searchPhrase, setSearchPhrase] = useState("")
    const [inputValue, setInputValue] = useState("")

    const addEmotion = (e, emotion) => {
        if (!selectedValues.some(selected => selected.value === emotion.value)){
            setSelectedValues([...selectedValues, emotion])
            setNotSelectedValues(sortAlphabetically(notSelectedValues.filter(notSelected => notSelected.value !== emotion.value)))
            setSearchPhrase("")
            setInputValue("")
        }
    }

    const deleteEmotion = (e, emotion) => {
        e.stopPropagation();
        if (selectedValues.some(selected => selected.value === emotion.value)){
            setSelectedValues(selectedValues.filter((selected) => selected.value !== emotion.value))
            setNotSelectedValues(sortAlphabetically([...notSelectedValues, emotion]))
        }
    }

    const searchEmotion = (e) => {
        setInputValue(e.target.value)
        setSearchPhrase(e.target.value)
    }

    useEffect(() => {
        setSuggestions(notSelectedValues.filter((emotion) => emotion.label.includes(searchPhrase)))
        setTags(selectedValues)
    }, [searchPhrase, notSelectedValues])

    return (
        <div tabIndex={0} className="relative w-full my-2 flex border rounded-lg bg-slate-300 text-xs text-slate-900 px-1 py-1 min-h-max"
             onBlur={() => setIsOpen(false)}
             onClick={() => setIsOpen(prev => !prev)}
        >
            <span className="flex flex-wrap grow gap-1 items-center">
                {selectedValues.map((option, index) =>
                    (<span key={index} className="items-center word-break border border-slate-500 rounded-full px-2 truncate">
                        {option.label}
                        <button className="ml-1 text-slate-600 hover:text-blue-500" onClick={(e) => deleteEmotion(e,option)}>&times;</button>
                    </span>))}
                <input className="bg-slate-300 focus:outline-0" placeholder="Search emotions..." onChange={(e) =>searchEmotion(e)} value={inputValue} type="text"/>
            </span>
            <button className="text-slate-600 text-sm hover:text-blue-500" onClick={() => {
                setSelectedValues([])
                setNotSelectedValues(allEmotions)
            }}>&times;</button>
            <ul className={`absolute w-full top-full left-0 max-h-40 overflow-y-auto bg-slate-300 z-[1000] mt-1 rounded-lg py-1 ${isOpen? "block": "hidden"} `}>
                {!suggestions.length && <li>No matches found</li>}
                {suggestions.map((option) =>
                    (<li key={option.value} className="rounded-lg px-2 hover:bg-blue-200 hover:cursor-pointer"
                        onMouseDown={(e) => addEmotion(e, option)}
                        >
                        {option.label}
                    </li>))}
            </ul>
        </div>
    )
}export default Selector