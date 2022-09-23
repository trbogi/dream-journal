import {useState} from "react";
import {addNewDream} from "../mock-dreams";

function NewDream({setNewDream}) {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [title, setTitle] = useState("");
    const [dreamText, setDreamText] = useState("");

    const add = (e) => {
        e.preventDefault()
        addNewDream(date, title, dreamText)
        setNewDream(false)
    }

    return (
        <form className="h-full flex flex-col items-center bg-slate-800 px-6 md:my-6 mx-4 rounded-md w-full sm:max-w-3xl overflow-hidden" onSubmit={add}>
            <div className="flex flex-row w-full">
                <input type="date" lang="en" value={date} onChange={(e) => setDate(e.target.value)}
                       className="bg-slate-700 my-4 mr-4 px-2 py-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 0"
                       style={{"colorScheme": "dark"}} placeholder="Select date"/>
                <input type="text" onChange={(e) => setTitle(e.target.value)}
                       required={true} className="bg-slate-700 my-4 ml-4 px-2 py-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 0" placeholder="Title"/>
            </div>
            <textarea className="w-full h-full bg-slate-700 my-4 px-2 py-2 rounded-md" placeholder="What were you dreaming about?"
                      required={true} onChange={(e) => setDreamText(e.target.value)}/>
            <div className="w-full flex justify-between">
                <button className="text-blue-400 border border-blue-400 px-4 py-2 mb-4 rounded-full" onClick={() => setNewDream(false)}>Cancel</button>
                <button type="submit" className="bg-blue-600 font-bold px-4 py-2 mb-4 rounded-full">Save</button>
            </div>
</form>
    );
}

export default NewDream;