import "../global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
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
        return <View><Text>carregando...</Text></View>
    }

    return (
        <GestureHandlerRootView onLayout={onLayoutRootView}>
            <Slot />
        </GestureHandlerRootView>
    )
}