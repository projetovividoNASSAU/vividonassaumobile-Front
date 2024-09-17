import { View, Text, TouchableOpacity } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { GuardianProps } from "./guardian";

export default function GuardianTab({name,phone,type}:GuardianProps) {
    return (
        <TouchableOpacity className="w-full ">
            <View className="flex flex-row w-full items-center justify-between border-[0.10rem] border-slate-200  py-4 p-3 ">
                <View>
                    <Text className="font-subtitle">{name}</Text>
                    <Text>{type}</Text>
                </View>
                <View>
                    <Text>{phone}</Text>
                </View>
                <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
};
