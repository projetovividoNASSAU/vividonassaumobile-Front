import {Controller, useForm} from 'react-hook-form'
import { SignuProps } from './types/signup'

export default function useSignupForm() {
    const { control, handleSubmit } = useForm<SignuProps>()

    const handleOnSubmit = (data: SignuProps) => {
        console.log(data)
    }
    
    return {
        control,
        Controller,
        handleSubmit,
        handleOnSubmit
    }
};
