import { SignuProps } from "../../hooks/types/signup";
import { api } from "../api";

export default async function registerApi(data: SignuProps) {
    // console.log("request data: ", data)
    try {
        return await api.post(
            '/home/register', 
            data
        );
    } catch (error) {
        console.error('algo deu errado: ', error)
    }
};
