import { TextInput, TextInputProps } from "react-native";
import { InputProps } from "./input";

export function Input({...rest}: TextInputProps) {
    return (
        <TextInput
            {...rest}
            className="bg-bluelight w-[100%] px-8 p-4 text-lg rounded-2xl"
        />
    )
}

export function InputDefault({ placeholder,...rest}: InputProps & TextInputProps) {
    return (
        <TextInput
            {...rest}
            className="bg-slate-100 w-[100%] px-8 p-4 text-lg rounded-2xl"
            placeholder={placeholder}
        />
    )
}

export function InputUpdate({ placeholder,...rest}: InputProps & TextInputProps) {
    return (
        <TextInput
            {...rest}
            className="bg-slate-100 w-[100%] px-8 p-4 text-lg rounded-2xl"
            placeholder={placeholder}
        />
    )
}