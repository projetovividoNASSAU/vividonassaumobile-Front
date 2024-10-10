import { ReactNode } from "react"
import { PressableProps, TouchableOpacityProps } from "react-native"

export type OptionsProps = {
    children: ReactNode
} & PressableProps

export type OptionsTitleProps = {
    children: ReactNode
}
export type OptionsIconProps = {
    children: ReactNode
}