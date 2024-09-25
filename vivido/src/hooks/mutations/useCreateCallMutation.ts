import { useMutation, QueryClient } from "@tanstack/react-query"
import { CallProps } from "../types/call"
import { createCallApi } from "../../api/post/create_callApi"
export default function useCreateCallMutation(token: string | null) {
    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: (data: CallProps) => {
            return createCallApi(data, token)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['calls']})
            return response?.data
        },
        onError: (error) => {
            console.log(error)
        }

    })
};
