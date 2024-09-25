import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonIconProps, ButtonProps, ButtonSubmitProps, ButtonDefaultProps,ButtonTitleProps } from "./button";
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

function ButtonTab({children,to, ...rest}: ButtonProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-fit flex flex-col items-center px-14 py-8 rounded-md justify-center`}
            activeOpacity={0.7}
            onPress={() => router.push(to)}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};


function ButtonPrimary({children, onSubmit, ...rest}: ButtonSubmitProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-[100%] flex flex-row items-center p-4  rounded-2xl justify-center`}
            activeOpacity={0.7}
            onPress={onSubmit}
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



function ButtonTextTab ({children}: ButtonTitleProps) {
    return (
        <Text className="text-center text-white font-subtitle">
            {children}
        </Text>
    )
}

function ButtonTextPrimary ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-white font-subtitle">
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
        <Text className="">
            {children}
        </Text>
    )   
}

function ButtonIconTab ({children}: ButtonIconProps) {
    return (
        <Text>
            {children}
        </Text>
    )   
}



function ButtonDefaultReq({children, onSubmit, ...rest}: ButtonDefaultProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-[100%] flex flex-row items-center p-4 gap-8 rounded-md justify-center`}
            activeOpacity={0.7}
            onPress={onSubmit}
            
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};


function ButtonDefault({children, onSubmit, to, ...rest}: ButtonProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-[100%] flex flex-row items-center p-4 gap-8 rounded-md justify-center`}
            activeOpacity={0.7}
            onPress={()=> {
                router.push(to)
            }}
            
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};

function ButtonDefaultIcon ({children}: ButtonIconProps) {
    return (
        <Text>
            {children}
        </Text>
    )   
}

function ButtonDefaultText ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-white font-subtitle">
            {children}
        </Text>
    )
}

function ButtonOpenNewCall({children, onSubmit, to, ...rest}: ButtonProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-grayprimary  w-[100%] flex flex-row items-center p-4 gap-8 rounded-md justify-center`}
            activeOpacity={0.7}
            onPress={()=> {
                router.push(to)
            }}
            
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};

function ButtonOpenNewCallIcon ({children}: ButtonIconProps) {
    return (
        <Text>
            {children}
        </Text>
    )   
}

function ButtonOpenNewCallText ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-white font-subtitle">
            {children}
        </Text>
    )
}


function ButtonPanic({children, onSubmit, to, ...rest}: ButtonProps & TouchableOpacityProps) {
    const router = useRouter()
    return (
        <TouchableOpacity
            className={`bg-redcherry  w-[100%] flex flex-row items-center justify-center p-4 gap-3 rounded-full`}
            activeOpacity={0.7}
            onPress={()=> {
                router.push(to)
            }}
            
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
};


function ButtonPanicText ({children}: ButtonTitleProps) {
    return (
        <Text className="text-base text-white  font-subtitle">
            {children}
        </Text>
    )
}


function ButtonPanicIcon ({children}: ButtonIconProps) {
    return (
        <Text>
            {children}
        </Text>
    )   
}


ButtonPanic.Text = ButtonPanicText
ButtonPanic.Icon = ButtonPanicIcon

Button.Text = ButtonText
Button.Icon = ButtonIcon

ButtonDefault.Text = ButtonDefaultText
ButtonDefault.Icon = ButtonDefaultIcon


ButtonOpenNewCall.Text = ButtonOpenNewCallText
// ButtonOpenNewCall.Icon = ButtonOpenNewCallIcon


ButtonDefaultReq.Text = ButtonDefaultText
ButtonDefaultReq.Icon = ButtonDefaultIcon

ButtonSecundary.TextSecudary = ButtonTextSecudary
ButtonSecundary.Icon = ButtonIcon

ButtonTab.ButtonTextTab = ButtonTextTab
ButtonTab.ButtonIconTab = ButtonIconTab

ButtonPrimary.TextPrimary = ButtonTextPrimary

export {
    Button, 
    ButtonSecundary, 
    ButtonPrimary, 
    ButtonTab,
    ButtonDefault,
    ButtonDefaultReq,
    ButtonPanic,
    ButtonOpenNewCall
}