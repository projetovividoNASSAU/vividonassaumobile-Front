import { TouchableOpacity, View, Text } from "react-native"
import { OptionsIconProps, OptionsProps, OptionsTitleProps } from "./option"

function Option({children}:OptionsProps) {
    return (
        <TouchableOpacity className="w-full flex flex-row items-center justify-between py-4 px-8 border-b-2 border-gray-300">  
            {children}
        </TouchableOpacity>
    )
};

function OptionTitle({children}:OptionsTitleProps) {
    return (
        <Text className="text-lg font-subtitle">  
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