import { TouchableOpacity, View, Text, Pressable } from "react-native"
import { OptionsIconProps, OptionsProps, OptionsTitleProps } from "./option"
import { useRouter } from "expo-router"

function Option({ children}:OptionsProps) {
    const router = useRouter()
    return (
        <View className="w-full flex flex-row items-center justify-between py-4 px-2 shadow-md shadow-slate-600">  
            {children}
        </View>
    )
};

function OptionTitle({children}:OptionsTitleProps) {
    return (
        <Text className="text-md font-subtitle">  
            {children}
        </Text>
    )
};


function OptionIcon({children}:OptionsIconProps) {
    return (
        <Text>  
            {children}
        </Text>
    )
};

Option.OptionTitle = OptionTitle
Option.OptionIcon = OptionIcon

export {
    Option
}