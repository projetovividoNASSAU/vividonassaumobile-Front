import { useCallback, useState } from "react"
import { SigninProps } from "./types/singin"
import { Controller, useForm } from "react-hook-form"
import useLoginMutation from "./mutations/useLoginMutation"
import { useRouter } from "expo-router"
export default function useSignInForm() {
    const [isLoading, setIsLoading] = useState(false) 
    const {control, handleSubmit} = useForm<SigninProps>()

    const router = useRouter()
    const loginMutation = useLoginMutation()

    const handleOnSubmit = useCallback((data: SigninProps) => {
        setIsLoading(true)
        console.log(data)
        loginMutation.mutate(
            data,
            {
                onSuccess: (response) => {
                    setIsLoading(false)
                    console.log('form | response data: ', response)
                    // router.push('/(tabs)')
                },
                onError: (error) => {
                    console.log('form | error data: ', error)
                }
            }
        )
    }, [handleSubmit, loginMutation])

    return{
        control,
        handleSubmit,
        handleOnSubmit,
        Controller,
        isLoading
    }
}
