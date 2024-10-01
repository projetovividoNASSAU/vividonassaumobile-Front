import {Controller, useForm} from 'react-hook-form'
import {  UpdatedUserProps } from './types/updateuser'
import { useCallback, useContext, useState } from 'react'
import { AddressProps } from './types/address'
import useUpdateAddressMutation from './mutations/useUpdateAddressMutation'
import { AuthContext } from '../contexts/AuthContext'

export function useUserUpdateForm() {
    const { control, handleSubmit } = useForm<UpdatedUserProps>()

    const handleOnSubmit = (data: UpdatedUserProps) => {
        console.log(data)
    }

    return {
        Controller,
        control,
        handleSubmit,
        handleOnSubmit
    }
};

export function useAddressUpdateForm(data: AddressProps) {
    const [isLoading, setIsLoading] = useState(false)
    const {control, register, handleSubmit,reset, watch } = useForm<AddressProps>({
        defaultValues: data || {}
    })

    const updateAddressMutation = useUpdateAddressMutation()

    const handleOnSubmit = useCallback((data: AddressProps) => {
        setIsLoading(true)
        updateAddressMutation.mutate(
            data,
            {
                onSuccess: () => {
                    setIsLoading(false)
                    console.log("deu certo")
                },
                onError: () => {
                    console.log('deu errado')
                }
            }
        )
    }, [])

    return {
        isLoading,
        control,
        register,
        handleOnSubmit,
        handleSubmit,
        reset,
        watch,
        Controller
    }
};
