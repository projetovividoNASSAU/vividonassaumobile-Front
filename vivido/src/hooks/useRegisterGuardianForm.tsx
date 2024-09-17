import { GuardianProps } from "../components/Guardian/guardian"
import { SigninProps } from "./types/singin"
import { Controller, useForm } from "react-hook-form"
export default function useRegisterGuardianForm() {
    const {control, handleSubmit} = useForm<GuardianProps>()

    const handleOnSubmit = (data: GuardianProps) => {
        console.log(data)
    }

    return{
        control,
        handleSubmit,
        handleOnSubmit,
        Controller
    }
}
