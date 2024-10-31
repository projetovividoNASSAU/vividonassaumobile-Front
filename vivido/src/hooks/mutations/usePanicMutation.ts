import { useMutation, QueryClient } from "@tanstack/react-query"
import panicApi from "../../api/post/panic_api"
export default function usePanicGuardianMutation( token: string | null) {
    const queryClient = new QueryClient()


    return useMutation({
        mutationFn: () => {
            return panicApi({}, token)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['panic']})
            return response?.data
        },
        onError: (error) => {
            console.log(error)
        }

    })
};
