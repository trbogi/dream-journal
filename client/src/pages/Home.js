import {useState} from "react"
import {IoSearch} from "react-icons/io5"
import {FiFilter} from 'react-icons/fi'
import {BsPencilSquare} from 'react-icons/bs'
import FilterByTime from "../components/FilterByTime"
import FilterByEmotions from "../components/FilterByEmotions"
import Diary from "../components/Diary"

function Home() {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [tags, setTags] = useState([]);
    const [showFilters, setShowFilters] = useState(false)

    const search = (e) => {
        setSearchPhrase(e.target.value)
    }


    return (
        <div className="max-w-5xl max-h-full min-w-full  lg:flex lg:justify-center lg:max-w-[1024px] lg:mt-10">
        {/*Menu*/}
        <div className="flex justify-between mb-4 px-4 flex-col lg:justify-start lg:max-w-[260px]">
            <div className="flex justify-between w-full lg:flex-col">
                <button className="text-sm bg-blue-600 font-bold px-2 py-2 my-2 rounded-full lg:mb-16" >
                    <span className="hidden sm:block">Add new dream</span> <BsPencilSquare className="w-5 h-5 my-1 mx-1 sm:hidden"/></button>
                <div className="flex items-center gap-1">
                    <div className="flex items-center w-full  bg-slate-300 text-slate-900 rounded-full px-4 py-1 my-2">
                        <IoSearch/>
                        <input className="bg-slate-300 px-2 focus:outline-none" type="search" onChange={search}/>
                    </div>
                    <button className={`flex justify-center items-center rounded-full bg-slate-300 text-slate-900 px-2 py-2 hover:text-blue-700 ${showFilters? "bg-slate-400": ""} lg:hidden`}
                            onClick={() => setShowFilters(!showFilters)}><FiFilter className="w-5 h-5"/></button>
                </div>
            </div>
                <div className={`${showFilters? "": "hidden"} lg:block`}>
                    <FilterByTime from={fromDate} to={toDate} setFrom={setFromDate} setTo={setToDate}/>
                    <FilterByEmotions tags={tags} setTags={setTags}/>
                </div>
        </div>
        <Diary searchPhrase={searchPhrase} fromDate={fromDate} toDate={toDate} tags={tags}/>
    </div>
    )

}
export default Home