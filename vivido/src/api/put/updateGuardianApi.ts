import { GuardianProps } from "../../hooks/types/guardian"
import { api } from "../api"

export async function updateGuardianApi(data: GuardianProps, token: string | null) {
    try {
        const response  = await api.put(
            '/guardian/edit/guardian',
                data,
        )
        return response
    } catch (error) {
        console.error(error)
    }
};
