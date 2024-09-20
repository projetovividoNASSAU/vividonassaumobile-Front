import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GuardianProps } from "../components/Guardian/guardian";
import { useCreateGuardianMutation } from "./mutations/useCreateGuardianMutation";
import { AuthContext } from "../contexts/AuthContext";
function useCreateGuardianForm() {
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit } = useForm<GuardianProps>();
    const {token} = useContext(AuthContext)
    const createGuardianMutation = useCreateGuardianMutation(token);

    const handleOnSubmit = (
        data: GuardianProps, 
        onSuccess: () => void, 
        onError: (error: any) => void
    ) => {
        setIsLoading(true);
        console.log(data)
        createGuardianMutation.mutate(data, {
            onSuccess: () => {
                setIsLoading(false);
                onSuccess();
            },
            onError: (error) => {
                setIsLoading(false);
                console.log(error)
                onError(error);
            }
        });
    };

    return {
        control,
        handleSubmit,
        Controller,
        handleOnSubmit,
        isLoading
    };
}

export { useCreateGuardianForm };
