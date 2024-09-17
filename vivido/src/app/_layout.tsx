//app/_layout.tsx
import "../global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack, useRouter } from "expo-router";
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat"
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()

export default function Layout () {
    const [fontsLoaded] = useFonts({   
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })

    useEffect((() => {
        async function prepare () {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }),[])


    const onLayoutRootView = useCallback((async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }),[fontsLoaded])
    

    if(!fontsLoaded) {
        return <View className="flex-1 items-center justify-center"><Text>carregando...</Text></View>
    }

    return (
        <GestureHandlerRootView onLayout={onLayoutRootView}>
            <QueryClientProvider client={queryClient}>
                <Slot/>
            </QueryClientProvider>
        </GestureHandlerRootView>
    )
}