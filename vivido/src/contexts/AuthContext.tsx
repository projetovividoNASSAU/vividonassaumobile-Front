import { createContext, ReactNode, useEffect, useState } from "react"
import { SigninProps } from "../hooks/types/singin"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../api/api"
import useLoginMutation from "../hooks/mutations/useLoginMutation"
import { useRouter } from "expo-router"
import { User } from "../hooks/types/user"

interface AuthContextData {
    token: string | null
    login: (data: SigninProps) => void
    logout: () => void
    isAuthenticated: boolean,
    isLoading:boolean,
    me: User|undefined,
    setMe: React.Dispatch<React.SetStateAction<User | undefined>>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)


interface AuthProviderProps {
    children: ReactNode
} 

export default function AuthProvider({children}: AuthProviderProps) {
    const [token, setToken] = useState<string | null >(null)
    const [isLoading, setIsLoading] = useState(false)
    const [me, setMe] = useState<User|undefined>()
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

    async function login (data: SigninProps) {
        setIsLoading(true)      
        try {
            loginMutation.mutate(data, {
                onSuccess: async (response) => {
                    const accessToken = response?.data?.token
                    if (accessToken) {
                        await AsyncStorage.setItem('@authToken', accessToken)
                        setIsLoading(false)
                        setToken(accessToken)
                        
                        console.log('deu certo: ', response?.data)
                        if(response?.data.role === "FUNCIONARIO") {
                            router.push('/(tabs_admin)')
                        } else {
                            router.push('/(tabs)')
                        }
                    }
                },
                onError: (error) => {
                    console.error('Login Error: ', error)
                }
                })
        } catch (error) {
            console.error('Login Context Error: ', error)
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('@authToken');
        setToken(null);
        router.push('/login')
        delete api.defaults.headers.common['Authorization'];
    }
    
    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{ me, setMe,  isLoading, token, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};
export { AuthContext }