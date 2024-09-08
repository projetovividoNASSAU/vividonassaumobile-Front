import { TextInput, TextInputProps } from "react-native";

export default function Input({...rest}: TextInputProps) {
    return (
        <TextInput
            {...rest}
            className="bg-bluelight w-[100%] px-8 p-4 text-lg rounded-2xl"
        />
    )
}
