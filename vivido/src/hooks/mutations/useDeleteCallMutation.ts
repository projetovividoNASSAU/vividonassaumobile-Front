import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteCallApi } from '../../api/delete/deleteCallApi';
export default function useDeleteCallMutation() {
    const queryClient = new QueryClient()
    return useMutation({
        mutationFn: (id: number|undefined) => {
            return deleteCallApi(id)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['calls']})
            return response?.data
        },
        onError: (error) => {
            console.error(error)
        }
    })
};
