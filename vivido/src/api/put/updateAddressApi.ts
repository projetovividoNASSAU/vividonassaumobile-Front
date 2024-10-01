import { AddressProps } from "../../hooks/types/address"
import { api } from "../api"

export async function updateAddressApi(data: AddressProps) {
    try { 
        const response = await api.put(
            '/home/continue/register',
            data
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
};
