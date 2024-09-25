import { api } from "../api"

export async function getCallApi(token: string| null) {
    try {
        const response = await api.get(
            '/guidance/userfilter',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response?.data
    } catch (error) {
        console.error(error)
    }
};
