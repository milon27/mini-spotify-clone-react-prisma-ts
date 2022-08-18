import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import IResponse from "./models/Response"

/**
 * 
 * @param ReturnType {Return Type}
 * @param InputType {Input Type}
 */
const postData = async <ReturnType, InputType>(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    data: InputType,
    onDone: (result: ReturnType) => void
) => {
    setLoading(true)
    try {
        const result = await axios.post<IResponse<ReturnType>>(url, data)
        if (result.data.data) {
            onDone(result.data.data)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        const message = (e as any).response.data.message || (e as Error).message
        toast(message)
    } finally {
        setLoading(false)
    }
}
const AxiosHelper = {
    postData
}
export default AxiosHelper
