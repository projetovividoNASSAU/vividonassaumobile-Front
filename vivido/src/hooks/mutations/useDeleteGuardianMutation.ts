import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteGuardianApi } from "../../api/delete/deleteGuardianApi";

export default function useDeleteGuardianMutation() {
    const queryClient = new QueryClient()
    return useMutation({
        mutationFn: (id: number|undefined) => {
            return deleteGuardianApi(id)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['guardian']})
            return response.data
        },
        onError: (error) => {
            console.error(error)
        }
    })
};
