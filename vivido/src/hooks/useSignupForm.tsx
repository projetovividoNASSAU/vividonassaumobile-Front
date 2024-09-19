import {Controller, useForm} from 'react-hook-form'
import { SignuProps } from './types/signup'
import useRegisterMutation from './mutations/useRegisterMutation'
import { useCallback, useState } from 'react'
import { useRouter } from 'expo-router'

export default function useSignupForm() {
    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit } = useForm<SignuProps>()
    const router = useRouter()

    const registerMutation = useRegisterMutation()

    const handleOnSubmit = useCallback((data: SignuProps) => {
        console.log(data)
        setIsLoading(true)
        registerMutation.mutate(
            data,
            {
                onSuccess: (response) => {
                    setIsLoading(false)
                    router.push('/login')
                },
                onError: (error) => {
                    console.log('erro na requisição2: ',error.message)
                }
            }
        )
    }, [registerMutation, handleSubmit])
    
    return {
        control,
        Controller,
        handleSubmit,
        handleOnSubmit,
        isLoading
    }
};
