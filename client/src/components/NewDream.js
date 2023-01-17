import { useNavigate } from "react-router";
import { useState } from "react";
import Selector from './Selector'

function NewDream() {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [title, setTitle] = useState("");
    const [emotions, setEmotions] = useState([]);
    const [text, setText] = useState("");

    const addNewDream = async () => {
        const response = await fetch('http://localhost:3001/api/dreams', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({
                date,
                title,
                text,
                emotions
            })
        })
        return response.json()
    }

    const add = (e) => {
        e.preventDefault()
        addNewDream()
        navigate('/')
    }

    return (
        <>
        <form className="h-full min-h-[32rem] flex flex-col items-center bg-slate-800 px-6 md:my-6 mx-4 rounded-lg w-full sm:max-w-3xl overflow-visible text-xs" onSubmit={add}>
            <div className="flex flex-row  justify-between w-full">
                <input type="text" onChange={(e) => setTitle(e.target.value)}
                       required={true} className="bg-slate-700 my-4 px-2 py-1 border border-slate-700 sm:text-sm rounded-2xl focus:outline-none focus:border-blue-500 w-1/2" placeholder="Title"/>
                <input type="date" lang="en" value={date} onChange={(e) => setDate(e.target.value)}
                       className="bg-slate-700 my-4 px-2 py-1 border border-slate-700 sm:text-sm rounded-2xl focus:outline-none focus:border-blue-500"
                       style={{"colorScheme": "dark"}}/>
            </div>
            <Selector mainStyle={"bg-slate-700 text-slate-50 text-sm focus:border focus:border-blue-500"} tagStyle={"bg-blue-200"} tag={emotions} setTags={setEmotions}/>
            <textarea className="w-full h-full bg-slate-700 border border-slate-700 my-4 px-2 py-2 rounded-2xl focus:outline-none focus:border-blue-500 text-sm" placeholder="What were you dreaming about?"
                      required={true} onChange={(e) => setText(e.target.value)}/>
            <div className="w-full flex justify-between">
                <button className="text-blue-400 text-sm border border-blue-400 px-4 py-2 mb-4 rounded-full"
                type="button" onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" className="bg-blue-600 font-bold text-sm px-4 py-2 mb-4 rounded-full">Save</button>
            </div>
    </form>
        </>
    );
}

export default NewDream;