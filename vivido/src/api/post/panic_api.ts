import { api } from "../api";

export default async function panicApi(data: any,token: string|null) {
    try {
        return api.post(
            '/panic/post',
            data,
            {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    } catch (error) {
        console.error('api | error ao realizar login: ', error)
    }
};
