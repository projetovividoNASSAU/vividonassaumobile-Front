import { useForm, Controller } from "react-hook-form";
import { GuardianProps } from "./types/guardian";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useUpdateGuardianMutation from "./mutations/useUpdateGuardianMutation";

export default function useUpdateGuardianForm(info: GuardianProps) {
    const [isLoading, setIsLoading] = useState(false);
    const { register, control, handleSubmit, reset, watch, setValue } = useForm<GuardianProps>({
        defaultValues: info || {}  // Inicializa com valores vazios ou dados existentes
    });
    const { token } = useContext(AuthContext);
    console.log('token req', token)
    const updateGuardianMutation = useUpdateGuardianMutation(token);

    const handleOnSubmit = (data: GuardianProps) => {
        setIsLoading(true);  // Define o estado de carregamento
        console.log(data)
        updateGuardianMutation.mutate({
            ...data,
            id: info.id
        }, {
            onSuccess: () => {
                setIsLoading(false);
                console.log('Guardião atualizado com sucesso');
            },
            onError: (error) => {
                setIsLoading(false);
                console.error('Erro ao atualizar guardião:', error);
            }
        });
    };

    return {
        register,
        handleOnSubmit,
        handleSubmit,
        Controller,
        control,
        isLoading,
        reset,
        setValue,
        watch
    };
}
