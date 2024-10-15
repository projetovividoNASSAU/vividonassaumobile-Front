import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { TouchableOpacity,Text } from 'react-native';
export default function BackPage() {
    const router = useRouter()
    return (
    <TouchableOpacity onPress={() => router.back()} className="flex flex-row items-center justify-start bg-slate-50 p-2 px-4 rounded-lg">
            <AntDesign name="left" size={24} color="#64748b" />
            <Text className="text-slate-500 text-lg">
                Voltar
            </Text>
    </TouchableOpacity>
    )   
}
