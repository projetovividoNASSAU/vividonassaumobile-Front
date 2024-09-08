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

SplashScreen.preventAutoHideAsync()

export default function Layout () {
    const [fontsLoaded] = useFonts({   
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })

    if(fontsLoaded) {
        SplashScreen.hideAsync()
    }

    return (
        <GestureHandlerRootView>
            <Slot />
        </GestureHandlerRootView>
    )
}