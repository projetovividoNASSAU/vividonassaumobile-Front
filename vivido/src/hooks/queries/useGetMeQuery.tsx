import { useQuery } from "@tanstack/react-query";
import { getMeApi } from "../../api/get/getMeApi";

export default function useGetMeQuery(token:string|null) {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['me'],
        queryFn: () => {
           return getMeApi(token)
        }
    })
    console.log(data)
    return {
        data,
        isError,
        isLoading
    }
};
