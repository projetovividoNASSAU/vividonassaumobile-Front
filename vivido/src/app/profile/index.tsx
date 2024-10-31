import { Text,Image,TouchableOpacity,View } from "react-native";
import Header from "../../components/Header";
import { Option } from "../../components/OptionsProfile";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import Uninassau from "../../components/UninasauLogo";
import BackPage from "../../components/BackPage";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function Profile() {
    const router = useRouter()
    const {me, logout} = useContext(AuthContext)

    return (
        <>
            <Header
                titleHeader="Perfil de usuário"
                subtitleHeader="Atualize suas informações de usuário"
            />
                <View className="flex-1 items-start justify-start m-auto mt-2">
                <BackPage 
                    to="/(tabs)/"
                />
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
            <TouchableOpacity onPress={logout} className="w-full flex flex-row items-center bg-slate-50 justify-center py-4 px-2 ">  
                    <Option.OptionTitle>
                        Sair
                    </Option.OptionTitle>
                    <Option.OptionIcon>
                        <FontAwesome5 name="door-open" size={24} color="black" />
                    </Option.OptionIcon>
            </TouchableOpacity>
            <View className="w-full flex flex-row justify-center">
            <TouchableOpacity className='h-32 w-32 mt-3'>
            <Image 
                className='bg-cover w-full h-full'
                source={require('../../../assets/uninassau_share.png')}
            />
        </TouchableOpacity>
            </View>
        </>
    )
};
