import { QueryClient, useMutation } from "@tanstack/react-query";
import { GuardianProps } from "../../hooks/types/guardian"
import { updateGuardianApi } from "../../api/put/updateGuardianApi";
export default function useUpdateGuardianMutation( token: string| null) {
    const queryClient = new QueryClient()
    return useMutation({
        mutationFn: (data: GuardianProps) => {
            return updateGuardianApi(data, token)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['guardian']})
            console.log(response)
            return response?.data
        },
        onError: (error) => {
            console.error(error)
        }
    })
};
