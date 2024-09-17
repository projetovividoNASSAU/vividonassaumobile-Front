import { SigninProps } from "../../hooks/types/singin";
import { api } from "../api";

export default async function loginApi(data: SigninProps) {
    try {
        return api.post(
            '/home/login',
            data
        )
    } catch (error) {
        console.error('api | error ao realizar login: ', error)
    }
};
