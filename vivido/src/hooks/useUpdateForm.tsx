import {Controller, useForm} from 'react-hook-form'
import { UpdatedAddressProps, UpdatedUserProps } from './types/updateuser'

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

export function useAddressUpdateForm() {
    const { control, handleSubmit } = useForm<UpdatedAddressProps>()

    const handleOnSubmit = (data: UpdatedAddressProps) => {
        console.log(data)
    }

    return {
        Controller,
        control,
        handleSubmit,
        handleOnSubmit
    }
};
