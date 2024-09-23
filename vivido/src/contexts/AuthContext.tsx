import { createContext, ReactNode, useEffect, useState } from "react"
import { SigninProps } from "../hooks/types/singin"
import AsyncStorage from "@react-native-async-storage/async-storage"
import loginApi from "../api/post/loginApi"
import { api } from "../api/api"
import useLoginMutation from "../hooks/mutations/useLoginMutation"
import { useRouter } from "expo-router"

interface AuthContextData {
    token: string | null
    login: (data: SigninProps, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)


interface AuthProviderProps {
    children: ReactNode
} 

export default function AuthProvider({children}: AuthProviderProps) {
    const [token, setToken] = useState<string | null >(null)
    // const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const loadTokenFromStorage = async () => {
            const storedToken = await AsyncStorage.getItem('@authToken')

            if(storedToken) {
                setToken(storedToken)
            }
        }
        loadTokenFromStorage()
    }, [])

    const loginMutation = useLoginMutation()

    async function login (data: SigninProps, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) {
        try {
            
            setIsLoading(true)
            loginMutation.mutate(data, {
                onSuccess: async (response) => {
                    const accessToken = response?.data?.token
                    if (accessToken) {
                        await AsyncStorage.setItem('@authToken', accessToken)
                        setIsLoading(false)
                        setToken(accessToken)
                        console.log('deu certo: ', response?.data)
                        router.push('/(tabs)')
                    }
                },
                onError: (error) => {
                    console.error('Login Error: ', error)
                }
                })
        } catch (error) {
            console.error('Login Context Error: ', error)
        }finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('@authToken');
        setToken(null);
        delete api.defaults.headers.common['Authorization'];
    }
    
    const isAuthenticated = !!token
    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};
export { AuthContext }