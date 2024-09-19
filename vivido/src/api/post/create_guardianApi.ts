import { GuardianProps } from "../../components/Guardian/guardian";
import { useContext } from "react";
import { api } from "../api";
import { AuthContext } from "../../contexts/AuthContext";

export default async function createGuardianApi(data: GuardianProps) {
    const {token} = useContext(AuthContext)
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
