import { useDreamsContext } from "../hooks/useDreamsContext"
import Highlighter from "react-highlight-words"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from "react"

function DreamItem({dream, searchPhrase}) {
    const { dispatch } = useDreamsContext()
    const [showModal, setShowModal] = useState(false)

    const deleteDream = async () => {
        const response = await fetch(`https://dream-journal-api.onrender.com/api/dreams/${dream._id}`, {
            method: 'DELETE'
        })
        const data = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_DREAM', payload: data})
        }
    }

    return (
        <>
        <li className="ml-6 my-8">
            <div className="flex justify-between items-center">
                                                    <span
                                                        className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-400" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </span>
                <h3 className="mb-1 text-lg font-semibold text-white">
                    <Highlighter
                        searchWords={[searchPhrase]}
                        autoEscape={true}
                        textToHighlight={dream.title}
                    />
                </h3>
                <div className="flex justify-between">
                    <time
                        className="block mb-2 text-ml font-bold leading-none text-blue-400">{new Date(dream.date).toDateString()}
                    </time>
                    
                        <button className="px-1 mb-2" onClick={() => setShowModal(true)}><FiTrash2/></button>
                        <Link to={`dream-journal/edit/${dream._id}`}><button className="pl-1 mb-2"><FiEdit/></button></Link>
                    
                </div>
            </div>
            {dream.emotions &&
                <div className="flex w-full flex-wrap mb-4">
                    {dream.emotions.map((emotion) => {
                        return <span key={emotion._id} className="bg-blue-200 text-slate-900 text-xs px-2 py-1 mr-2 my-1 rounded-full">{emotion.label}</span>})}
                </div>
            }
            <p className="text-justify font-normal text-slate-400">
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[searchPhrase]}
                    autoEscape={true}
                    textToHighlight={dream.text}
                />
            </p>
        </li>
        {showModal && 
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-blue-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <AiOutlineExclamationCircle className="h-12 w-12 text-blue-600"/>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Are you sure you want to delete this dream?</h3>

                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:justify-between sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-full border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={deleteDream}>
                  Delete
                </button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-full border border-blue-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        }
    </>
    )
}

export default DreamItem;