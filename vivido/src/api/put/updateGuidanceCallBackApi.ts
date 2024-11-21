import { api } from "../api";

export interface UpdateGuidanceCallBackProps {
    id:number,
    stringTitle:string
}

export async function updateGuidanceCallBackApi(token: string|null, data:UpdateGuidanceCallBackProps) {
    console.log("dados que estçao chegando na api: ", data)
    try {
        const response = await api.put(
            '/guidance/callback',
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response?.data
    } catch (error) {
        console.error(error)
        throw new Error("Erro ao enviar reposta de chamado!")
    }
};
