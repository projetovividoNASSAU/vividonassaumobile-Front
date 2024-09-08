import React, { ReactNode } from "react"
import { PressableProps,TouchableOpacityProps } from "react-native"

export type ButtonProps = {
    children: ReactNode
    to: string
}



export type ButtonTitleProps = {
    children: ReactNode
}

export type ButtonIconProps = {
    children: ReactNode
}