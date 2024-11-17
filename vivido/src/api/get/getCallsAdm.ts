import axios from "axios"

export async function getCallsAdmApi(token: string|null) {
    try {
        const reponse  = await axios.get(
            '/guidance/userfilter',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return reponse.data
    } catch (error) {
        console.error(error)
        throw new Error("Erro ao buscar chamados")
    }
};
