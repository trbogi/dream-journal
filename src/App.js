import {useState} from "react";
import Diary from "../src/components/Diary"
import NewDream from "./components/NewDream"
import {IoSearch} from "react-icons/io5"

function App() {
    const [newDream, setNewDream] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    const search = (e) => {
        setSearchPhrase(e.target.value)
    }

  return (
    <div className="flex flex-col items-center w-full h-screen text-slate-50 bg-slate-900 overflow-hidden">
        <header>
            Dream Diary
        </header>
        {!newDream &&
            <div className="max-w-5xl max-h-full min-w-full md:min-w-[768px]">
                <div className="flex justify-between">
                    <button className="bg-blue-600 font-bold px-2 py-2 mx-2 my-2 rounded-full" onClick={() => setNewDream(true)}>Add new
                        dream</button>
                    <div className="flex items-center bg-slate-200 text-slate-900 rounded-full px-4 my-2 mx-2">
                        <IoSearch/>
                        <input className="bg-slate-200 px-2 focus:outline-none" type="search" onChange={search}/>
                    </div>
                </div>
                <Diary searchPhrase={searchPhrase}/>
            </div>
        }
        {newDream &&
            <NewDream setNewDream={setNewDream}/>
        }
    </div>
  );
}

export default App;
