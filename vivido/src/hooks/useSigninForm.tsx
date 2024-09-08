import { SigninProps } from "./types/singin"
import { Controller, useForm } from "react-hook-form"
export default function useSignInForm() {
    const {control, handleSubmit} = useForm<SigninProps>()

    const handleOnSubmit = (data: SigninProps) => {
        console.log(data)
    }

    return{
        control,
        handleSubmit,
        handleOnSubmit,
        Controller
    }
}
