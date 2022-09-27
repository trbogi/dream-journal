import React, { useCallback } from 'react'
import { ReactTags } from 'react-tag-autocomplete'
import { suggestions } from '../mock-emotions'
import '../tags.css'

function EmotionSelector({emotions, setEmotions}) {

    const onAdd = useCallback(
        (newTag) => {
            setEmotions([...emotions, newTag])
        },
        [emotions]
    )

    const onDelete = useCallback(
        (index) => {
            setEmotions(emotions.filter((_, i) => i !== index))
        },
        [emotions]
    )

    return (
        <>
            <p className="w-full text-left px-2 my-2 text-sm">Select the emotions you have felt:</p>
            <ReactTags
                placeholderText="Select emotions"
                onAdd={onAdd}
                onDelete={onDelete}
                selected={emotions}
                suggestions={suggestions}
            />
        </>
    )
}export default EmotionSelector