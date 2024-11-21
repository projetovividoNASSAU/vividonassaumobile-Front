import { useQuery } from "@tanstack/react-query";
import { getCallsAdmApi } from "../../api/get/getCallsAdm";

export default function useGetCallsAdmQuerie(token: string|null) {
    console.log("token debtro da camada de querie",token)
    const {data, isError, isLoading} = useQuery({
        queryKey: ['calladm'],
        queryFn: () => {
            return getCallsAdmApi(token)
        }
    })
    console.log("data no querie",data)

    return {
        data,
        isError,
        isLoading
    }
}
