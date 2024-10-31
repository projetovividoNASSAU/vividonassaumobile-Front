import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { TouchableOpacity,Text } from 'react-native';

interface BackPageProps {
    to:string
}

export default function BackPage({to}: BackPageProps) {
    const router = useRouter()
    return (
    <TouchableOpacity onPress={() => router.push(to)} className="flex flex-row items-center justify-start bg-slate-50 p-2 px-4 rounded-lg">
            <AntDesign name="left" size={24} color="#64748b" />
            <Text className="text-slate-500 text-lg">
                Voltar
            </Text>
    </TouchableOpacity>
    )   
}
