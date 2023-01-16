import { DreamsContext } from "../context/DreamsContext"
import { useContext } from "react"

export const useDreamsContext = () => {
    const context = useContext(DreamsContext)

    if (!context) {
        throw Error('useDreamsContext must be used inside of DreamsContextProvider')
    }
    return context
}