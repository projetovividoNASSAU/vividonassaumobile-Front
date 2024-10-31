import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { GuardianProps } from "./guardian";
import { Link } from "expo-router";
import useDeleteGuardianMutation from "../../hooks/mutations/useDeleteGuardianMutation";

export function GuardianTab({name, phone, id,type}:GuardianProps) {
    const infoGuardian: GuardianProps = {
        id,
        name,
        phone,
        type
    }
    const deleteGuardianMutation = useDeleteGuardianMutation()
    
    const handleOnDelete = () => {
        deleteGuardianMutation.mutate(
            id,
            {
                onSuccess: () => {
                    console.log("excluido com sucesso")
                }, 
                onError: () => {
                    console.error('deuerro')
                }
            }
        )
    }


    return (
        <View
            className="flex flex-row border-[0.10rem] justify-between items-center py-4 px-4 max-w-full  border-slate-200 "
        >
            <View className="mr-0">
                <Text className="font-subtitle">{infoGuardian.name.split(" ")[0]}</Text>
                {/* <Text>{infoGuardian.type}</Text> */}
            </View>
            <View  className="mr-0">
                <Text>{infoGuardian.phone}</Text>
            </View> 
            <TouchableOpacity 
                className="mr-0"
                onPress={handleOnDelete}
            >
                <Ionicons name="person-remove-sharp" size={24} color="#3F4056" />
            </TouchableOpacity>
        </View>
    )
}
