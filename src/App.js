import {useState} from "react";
import Diary from "../src/components/Diary"
import NewDream from "./components/NewDream"
import {IoSearch} from "react-icons/io5"

function App() {
    const [newDream, setNewDream] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const search = (e) => {
        setSearchPhrase(e.target.value)
    }

  return (
    <div className="flex flex-col items-center w-full h-screen text-slate-50 bg-slate-900 overflow-hidden">
        {!newDream &&
            <div className="max-w-5xl max-h-full min-w-full md:min-w-[768px] lg:flex lg:mt-10">
                <div className="flex justify-between mb-4 flex-col lg:justify-start">
                    <div className="flex justify-between w-full lg:flex-col">
                        <button className="min-w-max text-xs sm:text-sm bg-blue-600 font-bold px-2 py-2 mx-2 my-2 rounded-full lg:mb-16" onClick={() => setNewDream(true)}>Add new
                            dream</button>
                        <div className="flex items-center bg-slate-300 text-slate-900 rounded-full px-4 py-2 my-2 mx-2">
                            <IoSearch/>
                            <input className="bg-slate-300 px-2 focus:outline-none" type="search" onChange={search}/>
                        </div>
                    </div>
                    <div className="flex text-sm lg:flex-col w-full">
                        <label>From:</label>
                        <input type="date" lang="en" value={fromDate} onChange={(e) => setFromDate(e.target.value)}
                               className="bg-slate-300 max-w-fit my-4 mx-2 px-2 py-2 text-slate-900 border border-slate-700 sm:text-sm rounded-full focus:outline-none focus:border-blue-500"/>
                        <label>To:</label>
                        <input type="date" lang="en" value={toDate} onChange={(e) => setToDate(e.target.value)} max={new Date().toISOString()}
                               className="bg-slate-300 max-w-fit my-4 mx-2 px-2 py-2 text-slate-900 border border-slate-700 sm:text-sm rounded-full focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
                <Diary searchPhrase={searchPhrase} fromDate={fromDate} toDate={toDate}/>
            </div>
        }
        {newDream &&
            <NewDream setNewDream={setNewDream}/>
        }
    </div>
  );
}

export default App;
