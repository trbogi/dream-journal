import {useState} from "react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi"

function FilterByTime({from, to, setFrom, setTo}) {
    const [isOpen, setIsOpen] = useState(false)
    const chevron = isOpen ? <BiChevronUp className="inline text-2xl"/> : <BiChevronDown className="inline text-2xl"/>

    return (
        <div className="px-4 py-2 lg:px-2">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full lg:w-full flex justify-between items-center">
            By time
            {chevron}
        </button>
        <div className={`${isOpen ? "": "hidden"} flex w-full text-sm justify-between md:justify-start md:gap-x-4 lg:flex-col lg:w-full`}>
            <div className="flex justify-between items-center my-2 bg-slate-300 text-slate-900 rounded-full border border-slate-700 px-2 py-1" >
                <span className="text-slate-500">From</span>
                <input type="date" lang="en" value={from} onChange={(e) => setFrom(e.target.value)}
                       className="bg-slate-300 max-w-fit sm:text-sm focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="flex justify-between items-center my-2 bg-slate-300 text-slate-900 rounded-full border border-slate-700 px-2 py-1" >
                <span className="text-slate-500">To</span>
                <input type="date" lang="en" value={to} onChange={(e) => setTo(e.target.value)}
                       className="bg-slate-300 max-w-fit sm:text-sm focus:outline-none focus:border-blue-500"/>
            </div>
        </div>
        </div>
    )
}export default FilterByTime