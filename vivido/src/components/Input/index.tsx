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

export function InputArea({ placeholder,...rest}: InputProps & TextInputProps) {
    return (
        <TextInput
        {...rest}
        style={{
          backgroundColor: '#f1f5f9', 
          width: '100%',
          padding: 16,
          fontSize: 15, 
          borderRadius: 2, 
          textAlignVertical: 'top', 
        }}
        multiline
        numberOfLines={10}
        maxLength={60}
        placeholder={placeholder}
      />
    )
}