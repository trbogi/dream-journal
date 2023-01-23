import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Selector from './Selector';

function DreamForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [dream , setDream] = useState(null)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [title, setTitle] = useState("");
    const [emotions, setEmotions] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        if (id) {
        const fetchDream = async () => {
    
            const response = await fetch(`https://dream-journal-api.onrender.com/api/dreams/${id}`)
            const dream = await response.json()
            setDream(date)
            setTitle(dream.title)
            setDate(dream.date.slice(0, 10))
            setEmotions(dream.emotions)
            setText(dream.text)
        }
        fetchDream()
    }
    }, [])

    const add = async(e) => {
        e.preventDefault()
        const response = await fetch('https://dream-journal-api.onrender.com/api/dreams', {
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
        if (response.ok){
            navigate('/')
        }
    }

    const update = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://dream-journal-api.onrender.com/api/dreams/${id}`, {
            method : 'PUT',
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
        if (response.ok){
            navigate('/')
        }
    }

    const handleSubmit = (e) => {
        if (id) {
            update(e)
        }else{
            add(e)
        }
    }

    return (
        <>
        <form className="h-full min-h-[32rem] flex flex-col items-center bg-slate-800 px-6 md:my-6 mx-4 rounded-lg w-full sm:max-w-3xl overflow-visible text-xs" onSubmit={handleSubmit}>
            <div className="flex flex-row  justify-between w-full">
                <input type="text" onChange={(e) => setTitle(e.target.value)}
                       required={true} className="bg-slate-700 my-4 px-2 py-1 border border-slate-700 sm:text-sm rounded-2xl focus:outline-none focus:border-blue-500 w-1/2" 
                       placeholder="Title"
                       value={title}/>
                <input type="date" lang="en" value={date} onChange={(e) => setDate(e.target.value)}
                       className="bg-slate-700 my-4 px-2 py-1 border border-slate-700 sm:text-sm rounded-2xl focus:outline-none focus:border-blue-500"
                       style={{"colorScheme": "dark"}}/>
            </div>
            {dream && 
                <Selector mainStyle={"bg-slate-700 text-slate-50 text-sm focus:border focus:border-blue-500"} tagStyle={"bg-blue-200"} setEmotions={() => setEmotions} emotions={emotions}/>
            }
            {!id && 
                <Selector mainStyle={"bg-slate-700 text-slate-50 text-sm focus:border focus:border-blue-500"} tagStyle={"bg-blue-200"} setEmotions={() => setEmotions} />
        }
            <textarea className="w-full h-full bg-slate-700 border border-slate-700 my-4 px-2 py-2 rounded-2xl focus:outline-none focus:border-blue-500 text-sm" placeholder="What were you dreaming about?"
                      required={true} onChange={(e) => setText(e.target.value)}
                      value={text}/>
            <div className="w-full flex justify-between">
                <button className="text-blue-400 text-sm border border-blue-400 px-4 py-2 mb-4 rounded-full"
                type="button" onClick={() => navigate('/')}>Cancel</button>
                <button type="submit" className="bg-blue-600 font-bold text-sm px-4 py-2 mb-4 rounded-full">Save</button>
            </div>
    </form>
        </>
    )
}

export default DreamForm