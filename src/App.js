import {useState} from "react";

function App() {
    const [newDream, setNewDream] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [title, setTitle] = useState("");
    const [dreamText, setDreamText] = useState("");

  return (
    <div className="flex flex-col items-center w-full h-screen text-slate-50 bg-slate-900">
        <header>
            Dream Diary
        </header>
        {!newDream &&
            <button className="bg-indigo-900 px-2 py-2 mx-2 my-2 rounded-md" onClick={() => setNewDream(true)}>Add new
                dream</button>
        }
        {newDream &&
        <div className="h-screen flex flex-col items-center bg-slate-800 px-6 md:my-6 mx-4 rounded-md w-full sm:max-w-3xl overflow-hidden">
            <div className="flex flex-row w-full">
                <input type="date" lang="en" value={date} onChange={(e) => setDate(e.target.value)}
                       className="bg-slate-700 border my-4 mr-4 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 0"
                       style={{"colorScheme": "dark"}} placeholder="Select date"/>
                <input type="text" onChange={(e) => setTitle(e.target.value)}
                       className="bg-slate-700 border my-4 ml-4 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 0" placeholder="Title"/>
            </div>

            <textarea className="w-full h-full bg-slate-700 my-4 px-2 py-2 rounded-md" placeholder="What were you dreaming about?"
                      onChange={(e) => setDreamText(e.target.value)}></textarea>
            <button className="bg-indigo-900 px-2 py-2 mx-2 my-2 rounded-md"onClick={() => setNewDream(false)}>Save</button>
        </div>}
    </div>
  );
}

export default App;
