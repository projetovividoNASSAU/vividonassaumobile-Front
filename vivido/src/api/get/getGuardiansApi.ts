import { GuardianProps } from "../../hooks/types/guardian"
import { api } from "../api"

export async function getGuardiansApi(token: string|null): Promise<GuardianProps[]> {
    console.log(token)
    try {
        const response = await api.get<GuardianProps[]>('/guardian/get-guardians');
        return response?.data; 
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao buscar guardiões');
    }
};
