import { useCallback, useContext, useState } from "react";
import { UpdateGuidanceCallBackProps } from "../api/put/updateGuidanceCallBackApi";
import { useForm } from "react-hook-form";
import useUpdateGuidanceCallback from "./mutations/useUpdateGuidanceCallback";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function useUpdateCallbackForm(info: UpdateGuidanceCallBackProps) {
    const router = useRouter()
    const {token} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const {control, handleSubmit, register, reset, watch} = useForm<UpdateGuidanceCallBackProps>({
    })

    const updateCallBack =  useUpdateGuidanceCallback(token)
    const handleOnSubmit = useCallback((data: UpdateGuidanceCallBackProps ) => {
        setIsLoading(true)
        console.log("antes que eu me mate aqui, ", data)
        updateCallBack.mutate(
            {
                ...data,
                id: info?.id
            },
            {
                onSuccess: () => {
                    setIsLoading(false)
                    console.log("deu certo")
                    router.push('/(tabs_admin)/')
                },
                onError: () => {
                    console.log('deu errado')
                }
            }
        )
    }, [])
    


    return {
        control,
        handleSubmit,
        register,
        reset,
        watch,
        isLoading,
        handleOnSubmit
    }
};
