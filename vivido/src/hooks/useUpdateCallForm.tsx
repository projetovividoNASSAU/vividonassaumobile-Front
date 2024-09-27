import {useForm, Controller} from 'react-hook-form'
import { CallProps } from './types/call'
import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import useUpdateCallMutation from './mutations/useUpdateCallMutation'

export function useUpdateCallForm(info: CallProps) {
    const [isLoading, setIsLoading] = useState(false)
    const {control, register, handleSubmit,reset, watch } = useForm<CallProps>({
        defaultValues: info || {}
    })
    console.log("teste id: ",info.id)
    const {token} = useContext(AuthContext)

    const updateCallMutation = useUpdateCallMutation(token)

    const handleOnSubmit = useCallback((data: CallProps) => {
        setIsLoading(true)
        updateCallMutation.mutate(
            {
                ... data,
                id: info.id
            },
            {
                onSuccess: (response) => {
                    console.log('deu certo')
                    setIsLoading(false)
                    console.log(response)
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        )
    }, [handleSubmit])
    return {
        isLoading,
        control,
        register,
        Controller,
        watch,
        reset,
        handleSubmit,
        handleOnSubmit,
    }
}
