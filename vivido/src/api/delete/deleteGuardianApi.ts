import { api } from "../api"

export async function deleteGuardianApi(id:number | undefined) {
    try {
        const response = await api.delete(
            '/guardian/delete/guardian',
            {
                data: {id: id}
            }
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
};
