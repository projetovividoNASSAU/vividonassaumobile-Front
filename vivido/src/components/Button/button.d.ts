import React, { ReactNode } from "react"
import { PressableProps,TouchableOpacityProps } from "react-native"

export type ButtonProps = {
    children?: ReactNode
    to: string
}

export type ButtonSubmitProps = {
    children: ReactNode
    onSubmit:  ((event: GestureResponderEvent) => void) | undefined
}


export type ButtonTitleProps = {
    children: ReactNode
}

export type ButtonIconProps = {
    children?: ReactNode
}