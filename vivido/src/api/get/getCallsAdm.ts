import { api } from "../api"
export async function getCallsAdmApi(token: string|null) {
    console.log("token na api",token)
    try {
        const reponse  = await api.get(
            '/guidance/func/get_guidance',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        return reponse?.data
    } catch (error) {
        console.error(error)
        throw new Error("Erro ao buscar chamados")
    }
};
