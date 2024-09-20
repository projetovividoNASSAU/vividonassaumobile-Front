import { GuardianProps } from "../../components/Guardian/guardian";
import { api } from "../api";

export default async function createGuardianApi(data: GuardianProps, token: string|null) {
    console.log(token)
    try {
        const accesstoken = token
        const response = api.post(
            '/guardian/create',
            data,
            {
                headers:{
                    'Authorization': `Bearer ${accesstoken}`
                }
            }
        )

        return response
    } catch (error) {
        console.error(error)
    }
};
