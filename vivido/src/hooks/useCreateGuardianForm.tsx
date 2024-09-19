import { Controller, useForm } from "react-hook-form";
import { GuardianProps } from "../components/Guardian/guardian";
import {useCreateGuardianMutation} from "./mutations/useCreateGuardianMutation";
import { useState } from "react";
import { useRouter } from "expo-router";

function useCreateGuardianForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const {control, handleSubmit} = useForm<GuardianProps>()

    const createGuardianMutation = useCreateGuardianMutation()

    const handleOnSubmit = (data: GuardianProps) => {
        setIsLoading(true)
        createGuardianMutation.mutate(
        data,
        {
            onSuccess: () => {
                setIsLoading(false)
                router.push('/guardian')
            },
            onError: (error) => {
                setIsLoading(false)
                console.error(error)
            }
        })
    }

    return {
        control,
        handleSubmit,
        Controller,
        handleOnSubmit,
        isLoading
    }
};

export {
    useCreateGuardianForm
}
