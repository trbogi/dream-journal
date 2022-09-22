import {useState} from "react";
import Diary from "../src/components/Diary"
import NewDream from "./components/NewDream";

function App() {
    const [newDream, setNewDream] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-screen text-slate-50 bg-slate-900 overflow-hidden">
        <header>
            Dream Diary
        </header>
        {!newDream &&
            <div className="max-w-5xl max-h-full">
                <button className="bg-blue-600 font-bold px-2 py-2 mx-2 my-2 rounded-md" onClick={() => setNewDream(true)}>Add new
                dream</button>
                <Diary/>
            </div>
        }
        {newDream &&
            <NewDream setNewDream={setNewDream}/>
        }
    </div>
  );
}

export default App;
