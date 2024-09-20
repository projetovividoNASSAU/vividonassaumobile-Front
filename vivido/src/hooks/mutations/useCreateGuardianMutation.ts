import { QueryClient, useMutation } from '@tanstack/react-query';
import createGuardianApi from '../../api/post/create_guardianApi';
import { GuardianProps } from '../../components/Guardian/guardian';

function useCreateGuardianMutation(token: string | null) {
    const queryClient = new QueryClient() 

    return useMutation({
        mutationFn: (data: GuardianProps) => {
            return createGuardianApi(data,token)
        },
        onSuccess: (response) => {
            queryClient.invalidateQueries({queryKey: ['guardian']})
            return response?.data
        },
        onError: (error) => {
            console.error('error mutatio: ', error)
        }
    })
};

export {
    useCreateGuardianMutation
}
