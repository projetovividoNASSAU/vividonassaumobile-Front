import { CallProps } from "../../hooks/types/call"
import { api } from "../api"

export async function createCallApi(data: CallProps, token: string|null) {
    console.log(data)
    try {
        const response = await api.post(
            '/guidance/create',
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
};
