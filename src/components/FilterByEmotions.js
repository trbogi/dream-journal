import {useState} from "react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi"
import Selector from "./Selector";

function FilterByEmotions({tags, setTags}) {
    const [isOpen, setIsOpen] = useState(false)
    const chevron = isOpen ? <BiChevronUp className="inline text-2xl"/> : <BiChevronDown className="inline text-2xl"/>

    return (
        <div className="py-2">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full border-b border-gray-700 py-1 lg:w-full flex justify-between items-center">
                By emotions
                {chevron}
            </button>
            <div className={`${isOpen ? "": "hidden"} flex w-full text-sm justify-between md:justify-start md:gap-x-4 lg:flex-col lg:w-full`}>
                <Selector/>
            </div>
        </div>
    )
}export default FilterByEmotions