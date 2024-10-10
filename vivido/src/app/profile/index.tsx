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
    const {me} = useContext(AuthContext)

    return (
        <>
            <Header
                titleHeader="Perfil de usuário"
                subtitleHeader="Atualize suas informações de usuário"
            />
                <View className="flex-1 items-start justify-start m-auto mt-2">
                <BackPage />
                <View className=" flex flex-col items-center h-[40%] w-[90%] gap-6  justify-start pt-8">
                    <TouchableOpacity className="w-full" onPress={()=> router.replace('/update_user')}>
                        <Option className="w-full !bg-slate-300" >
                            <Option.OptionTitle>
                                Conta
                            </Option.OptionTitle>
                            <Option.OptionIcon>
                                <AntDesign name="right" size={24} color="#3F4056" />
                            </Option.OptionIcon>
                        </Option>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full" onPress={()=> {
                            router.push({
                                pathname: '/update_address/[data]',
                                params: {data: JSON.stringify({
                                    adress: me?.adress,
                                    phone: me?.phone,
                                    cep: me?.cep
                                })}
                            })
                        }}>
                        <Option>
                            <Option.OptionTitle>
                                Endereço
                            </Option.OptionTitle>
                            <Option.OptionIcon>
                                <AntDesign name="right" size={24} color="#3F4056" />
                            </Option.OptionIcon>
                        </Option>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full flex flex-row justify-center">
                <Uninassau/>
            </View>
        </>
    )
};
