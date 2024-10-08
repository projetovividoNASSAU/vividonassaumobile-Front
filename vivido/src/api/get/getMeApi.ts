import { api } from "../api"

export async function getMeApi(token: string|null) {
    try {
        const response = await api.get(
            '/home/get-data',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
};
