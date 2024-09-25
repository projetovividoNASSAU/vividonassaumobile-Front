import { useQuery } from "@tanstack/react-query";
import { getCallApi } from "../../api/get/getCallApi";

export default function useGetCallsQuery(token:string|null) {
    const {data, error, isLoading} = useQuery({
        queryKey: ['calls'],
        queryFn: () => {
            return getCallApi(token)
        },
    })

    return {
        data,
        error,
        isLoading
    }
};
