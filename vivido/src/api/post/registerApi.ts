import { SignuProps } from "../../hooks/types/signup";
import { api } from "../api";

export default async function registerApi(data: SignuProps) {
    try {
        return await api.post(
            '/home/register', 
            data
        );
    } catch (error) {
        console.error('algo deu errado: ', error)
    }
};
