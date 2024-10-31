import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import usePanicGuardianMutation from "./mutations/usePanicMutation";
import { Alert } from "react-native";


function usePanicGuardianForm() {
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useContext(AuthContext)
    const data = {} 
    const panicGuardianMutation = usePanicGuardianMutation( token);

    const handleOnSubmit = (
        onSuccess: () => void, 
        onError: (error: any) => void
    )    => {
        setIsLoading(true);
        console.log(data)
        panicGuardianMutation.mutate(undefined, {
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
        handleOnSubmit,
        isLoading
    };
}

export { usePanicGuardianForm };
