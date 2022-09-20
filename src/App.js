import {useState} from "react";

function App() {
    const [newDream, setNewDream] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-screen text-slate-50 bg-slate-900">
        <header className="uppercase">
            Dream Diary
        </header>
        {!newDream &&
            <button className="bg-indigo-900 px-2 py-2 mx-2 my-2 rounded-md" onClick={() => setNewDream(true)}>Add new
                dream</button>
        }
        {newDream &&
        <div className="h-screen flex flex-col items-center bg-slate-800 px-6 md:my-6 mx-4 rounded-md w-full sm:max-w-3xl overflow-hidden">
            <textarea className="w-full h-full bg-slate-700 my-4 px-2 py-2 rounded-md" placeholder="What were you dreaming about?"></textarea>
            <button className="bg-indigo-900 px-2 py-2 mx-2 my-2 rounded-md"onClick={() => setNewDream(false)}>Save</button>
        </div>}
    </div>
  );
}

export default App;
