import { useMutation, useQueryClient } from "@tanstack/react-query";
import registerApi from "../../api/post/registerApi";
import { SignuProps } from "../types/signup";

export default function useRegisterMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: SignuProps) => {
            return registerApi({
                ...data,
                cep: '000000000',
                adress: 'Avenidaraullopes125',
                phone: '00000000000'
            })
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['user']})
            return data
        },
        onError: (error) => {
            return error.message || "Ocorreu um erro.";
        }
    })
};
