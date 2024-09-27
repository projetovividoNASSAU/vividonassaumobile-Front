import { CallProps } from "../../hooks/types/call"
import { api } from "../api"

export async function updateCallApi(data: CallProps, token:string|null) {
    console.log('data api: ', data)
    console.log('token api update: ', token)
    try {
        const response = await api.put(
            '/guidance/edit',
            data,
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
