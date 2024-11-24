import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { InputProps, TextPasswordInputProps } from "./input";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export function Input({...rest}: TextInputProps) {
    

    return (
        <TextInput
            {...rest}
            className="bg-sky-100 w-[100%] px-4 p-4 text-lg  rounded-2xl"
        />
    )
}

export function InputPassword({...rest}: TextPasswordInputProps & TextInputProps) {
    const [active, setActive] = useState(true)
    return (
        <View className="relative ">
            <TextInput
                {...rest}
                secureTextEntry={active}
                className="bg-sky-100 w-full px-4 p-4 text-lg rounded-2xl"
            />
            <TouchableOpacity
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onPress={() => setActive(!active)}
            >
                {
                    active ?
                    (   
                    <AntDesign
                        className=" !text-redcherry"
                        name="eyeo"
                        size={24}
                    />   
                    ): (
                        <FontAwesome5 
                        name="eye-slash" 
                        size={18} 
                        className=" !text-redcherry" 
                        />
                    )
                }
            </TouchableOpacity>
        </View>
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
            multiline
            textAlignVertical="top"
            numberOfLines={10}
            maxLength={400}
            className={`bg-slate-100 w-[100%]  p-4 text-lg rounded-2xl`}
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