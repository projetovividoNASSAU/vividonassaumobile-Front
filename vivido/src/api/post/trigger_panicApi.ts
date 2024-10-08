import { api } from "../api"

export async function trigger_panicApi(token: string | null) {
    try {
        const response = await api.post(
            '/panic',
            token
        )
        return 
    } catch (error) {
        console.error(error)
        throw error
    }
};
