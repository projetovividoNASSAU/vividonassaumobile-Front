import { updateAddressApi } from "../../api/put/updateAddressApi";
import { AddressProps } from "../types/address";
import { QueryClient, useMutation } from '@tanstack/react-query';

export default function useUpdateAddressMutation() {
    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: (data: AddressProps) => {
            return updateAddressApi(data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['users']})
            return response
        },
        onError: (error) => {
            return error.message
        }
    })
};
