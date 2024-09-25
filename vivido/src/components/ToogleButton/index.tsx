import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface ToggleButtonProps {
    title:string
    subtitle:string
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    isActive:boolean
}

export  function ToggleButton({isActive,setIsActive,subtitle,title}: ToggleButtonProps) {

    const toggle = () => setIsActive((prev) => !prev);

    return (
    <Pressable
        onPress={toggle}
        className='w-full flex flex-row justify-between items-center rounded-2xl border-2 border-slate-300 gap-3 p-4'
    >
        <View 
            className={`w-10 h-10 rounded-lg flex justify-center items-center ${
            isActive ? "bg-redcherry" : "bg-gray-300"
            }`}
        ></View>
        <View>
            <Text className="text-base font-bold text-grayprimary">{title}</Text>
            <Text className="text-start text-sm text-grayprimary">{subtitle}</Text>
        </View>
    </Pressable>
    );
}
