import {useForm, Controller} from 'react-hook-form'
import { CallProps } from './types/call'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import useCreateCallMutation from './mutations/useCreateCallMutation'
import { useRouter } from 'expo-router'

export default function useCreateCallForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {control,handleSubmit} = useForm<CallProps>()
    const {token} = useContext(AuthContext)
    const createCallMutation = useCreateCallMutation(token)
    const handleOnSubmit = (data:CallProps) => {
        setIsLoading(true)
        createCallMutation.mutate(
            data, {
                onSuccess: () => {  
                    setIsLoading(false)
                    console.log('deu bom')
                },
                onError: (error) => {
                    setIsLoading(true)
                    console.error(error)
                }
            }
        )
    }

    return{
        control,
        handleOnSubmit,
        handleSubmit,
        Controller,
        isLoading
    }
}
