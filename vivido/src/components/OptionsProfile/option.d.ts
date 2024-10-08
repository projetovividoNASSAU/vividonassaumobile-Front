import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"

export type OptionsProps = {
    children: ReactNode
} & TouchableOpacityProps

export type OptionsTitleProps = {
    children: ReactNode
}
export type OptionsIconProps = {
    children: ReactNode
}