import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninProps } from "../types/singin";
import loginApi from "../../api/post/loginApi";

export default function useLoginMutation() {
    const queryClient = useQueryClient()


    return useMutation({
        mutationFn: (data: SigninProps) => {
            return loginApi(data)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['user']})
            return response?.data
        },
        onError: (error) => {
            console.log(error.message)
        }
    })
};
