import { Text,TouchableOpacity,View } from "react-native";
import Header from "../../components/Header";
import { Option } from "../../components/OptionsProfile";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import Uninassau from "../../components/UninasauLogo";
import BackPage from "../../components/BackPage";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Profile() {
    const router = useRouter()

    return (
        <>
            <Header
                titleHeader="Perfil de usuário"
                subtitleHeader="Atualize suas informações de usuário"
            />
                <View className="flex-1 items-start justify-start m-auto mt-2">
                <BackPage />
                <View className=" flex flex-col items-center h-[40%] w-[90%] gap-6  justify-start pt-8">
                    <Option>
                        <Option.OptionTitle>
                            Conta
                        </Option.OptionTitle>
                        <Option.OptionIcon>
                            <AntDesign name="right" size={24} color="#3F4056" />
                        </Option.OptionIcon>
                    </Option>
                    <Option onPress={()=> {
                        router.push({
                            pathname: '/update_address/[data]',
                            // params: {data: JSON.stringify(user)}
                        })
                    }}>
                        <Option.OptionTitle>
                            Endereço
                        </Option.OptionTitle>
                        <Option.OptionIcon>
                            <AntDesign name="right" size={24} color="#3F4056" />
                        </Option.OptionIcon>
                    </Option>
                </View>
            </View>
            <View className="w-full flex flex-row justify-center">
                <Uninassau/>
            </View>
        </>
    )
};
