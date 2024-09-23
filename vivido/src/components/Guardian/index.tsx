import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { GuardianProps } from "./guardian";
import { Link } from "expo-router";
import useDeleteGuardianMutation from "../../hooks/mutations/usedeleteGuardianMutation";

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
                    console.log('deu certo')
                }, 
                onError: () => {
                    console.error('deuerro')
                }
            }
        )
    }


    return (
        <Link
            className="flex border-[0.10rem] border-slate-200 py-4 p-3"
            href={{
                pathname: '/update_guardian/[data]',
                params: {data: JSON.stringify(infoGuardian)}  
            }}
        >
            <View className="!flex !flex-row !w-[100%] !items-center">
                <View>
                    <Text className="font-subtitle">{infoGuardian.name}</Text>
                    <Text>{infoGuardian.type}</Text>
                </View>
                <View>
                    <Text>{infoGuardian.phone}</Text>
                </View> 
                <TouchableOpacity onPress={handleOnDelete}>
                    <Ionicons name="person-remove-sharp" size={24} color="#3F4056" />
                </TouchableOpacity>
            </View>
        </Link>
    )
}
