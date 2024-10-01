import { useForm } from "react-hook-form";
import { AddressProps } from "./types/address";
import { useCallback, useState } from "react";
import useUpdateAddressMutation from "./mutations/useUpdateAddressMutation";

export default function useUpdateAddressForm(data: AddressProps) {
    const [isLoading, setIsLoading] = useState(false)
    const {control, register, handleSubmit,reset, watch } = useForm<AddressProps>({
        defaultValues: data || {}
    })

    const updateAddressMutation = useUpdateAddressMutation()

    const handleOnSubmit = useCallback(() => {
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

    }
};
