import { Text,TouchableOpacity,View } from "react-native";
import Header from "../../components/Header";
import { Option } from "../../components/OptionsProfile";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

export default function Profile() {
    const router = useRouter()
    return (
        <>
            <Header
                titleHeader="Perfil de usuário"
                subtitleHeader="Atualize suas informações de usuário"
            />
            <View className="flex-1 items-start justify-start m-auto mt-10">
                <TouchableOpacity onPress={() => router.back()} className="flex flex-row items-center justify-start bg-slate-200 p-2 px-4 rounded-lg">
                    <AntDesign name="left" size={24} color="#64748b" />
                    <Text className="text-slate-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <View className="w-[90%] flex flex-col items-center gap-8 mt-12">
                    <Option>
                        <Option.OptionTitle>
                            Informações de usuário
                        </Option.OptionTitle>
                        <Option.OptionIcon>
                            <AntDesign name="right" size={24} color="#3F4056" />
                        </Option.OptionIcon>
                    </Option>
                    <Option>
                        <Option.OptionTitle>
                            Endereço
                        </Option.OptionTitle>
                        <Option.OptionIcon>
                            <AntDesign name="right" size={24} color="#3F4056" />
                        </Option.OptionIcon>
                    </Option>
                </View>
            </View>
        </>
    )
};
