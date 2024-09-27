import { QueryClient, useMutation } from "@tanstack/react-query";
import { CallProps } from "../types/call";
import { updateCallApi } from "../../api/put/updateCallApi";

export default function useUpdateCallMutation(token: string|null) {
    const queryClient = new QueryClient()

    return useMutation({
        mutationFn: (data: CallProps) => {
            return updateCallApi(data, token)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['calls']})
            console.log(response)
            return response
        },
        onError: (error) => {
            console.error(error)
        }
    })
}
