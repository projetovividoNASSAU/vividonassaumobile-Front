import { useQuery } from "@tanstack/react-query";
import { getGuardiansApi } from "../../api/get/getGuardiansApi";
import { GuardianProps } from "../types/guardian";

export default function useGetGuardiansQuery(token: string|null) {
    const {data,error,isLoading, } = useQuery<GuardianProps[]>({
        queryKey: ['guardian'],
        queryFn: () => {
            return getGuardiansApi(token)
        }
    })

    return {
        data,
        error,
        isLoading
    }
};
