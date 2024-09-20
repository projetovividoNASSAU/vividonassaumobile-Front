import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL:'https://projetovivido-back-end.onrender.com',
    // timeout: 5000,
})
// api.interceptors.request.use(
//     async (config) => {
//         const token =  await AsyncStorage.getItem('@authToken')

//         const isAuthRouter = ['/register', '/login'].includes(config.url || '') 

//         if (token && !isAuthRouter) {
//             config.headers.Authorization = `Bearer ${token}`
//         }

//         return config
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )