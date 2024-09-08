import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonIconProps, ButtonProps, ButtonTitleProps } from "./button";
import { useRouter } from "expo-router";

const variantStyles = {
    primary: 'bg-grayprimary text-white',
    secondary: 'bg-graylight text-greensecundary',
    danger: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
};


function Button({children,to, ...rest}: ButtonProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-[100%] flex flex-row items-center p-4 rounded-full justify-end`}
            activeOpacity={0.7}
            onPress={() => router.push(to)}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};

function ButtonSecundary({children, to, ...rest}: ButtonProps & TouchableOpacityProps)  {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-graylight max-w-[100%] flex flex-row items-center p-4 rounded-full justify-center`}
            activeOpacity={0.7}
            {...rest}
            onPress={() => router.push(to)}
        >
            {children}
        </TouchableOpacity>
    )
};


function ButtonText ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-white pr-32 font-subtitle">
            {children}
        </Text>
    )
}

function ButtonTextSecudary ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-greensecundary font-subtitle">
            {children}
        </Text>
    )
}

function ButtonIcon ({children}: ButtonIconProps) {
    return (
        <Text>
            {children}
        </Text>
    )   
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

ButtonSecundary.TextSecudary = ButtonTextSecudary
ButtonSecundary.Icon = ButtonIcon

export {Button, ButtonSecundary}