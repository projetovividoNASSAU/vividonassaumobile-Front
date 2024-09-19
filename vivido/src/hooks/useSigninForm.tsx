import { useCallback } from "react"
import { SigninProps } from "./types/singin"
import { Controller, useForm } from "react-hook-form"
import useLoginMutation from "./mutations/useLoginMutation"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function useSignInForm() {
    const {control, handleSubmit} = useForm<SigninProps>()
    const {login, isLoading, isAuthenticated} = useContext(AuthContext)

    const loginMutation = useLoginMutation()

    const handleOnSubmit = useCallback((data: SigninProps) => {
        console.log(data)
        login(data)
    }, [handleSubmit, loginMutation])

    return{
        control,
        handleSubmit,
        handleOnSubmit,
        Controller,
        isLoading, 
        isAuthenticated
    }
}
