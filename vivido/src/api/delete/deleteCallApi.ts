import { api } from "../api"

export async function deleteCallApi(id: number | undefined) {
    try {
        const response = await api.delete(
            '/guidance/deleteByUser',
            {
                data: {id: id}
            }
        )
        return response
    } catch (error) {
        console.error(error)
    }
};
