import React, { ReactNode } from "react"
import { PressableProps,TouchableOpacityProps } from "react-native"

export type ButtonProps = {
    children?: ReactNode
    onSubmit?:  ((event: GestureResponderEvent) => void) | undefined
    to: string
}
export type ButtonDefaultProps = {
    children: ReactNode
    onSubmit?:  ((event: GestureResponderEvent) => void) | undefined
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