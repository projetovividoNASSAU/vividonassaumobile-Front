import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateGuidanceCallBackApi, UpdateGuidanceCallBackProps } from "../../api/put/updateGuidanceCallBackApi";

export default function useUpdateGuidanceCallback(token:string|null) {
    const queryClient = new QueryClient()
    return useMutation({
        mutationFn: (data:UpdateGuidanceCallBackProps)=> {
            console.log("mutation: ",data)
            return updateGuidanceCallBackApi(token, data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey:['callAdm']})
            console.log(response)
            return response?.data
        },
        onError: (error) => {
            console.error(error)
        }
    })
};
