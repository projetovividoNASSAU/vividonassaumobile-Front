import { View, Text, FlatList, Touchable } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import {GuardianTab} from "../../components/Guardian";
import { ButtonDefault } from "../../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useGetGuardiansQuery from "../../hooks/queries/useGetGuardiansQuery";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Guadians() {
    const {token} = useContext(AuthContext)

    const {data,isLoading} = useGetGuardiansQuery(token)
    
    if (isLoading) {
        return <View className="flex-1  w-full items-center justify-center">
            <Text>Carregando...</Text>
        </View>
    }

    return (
        <>
            <Header
                titleHeader="Guardiões"
                subtitleHeader={(<BackPage
                    to="/(tabs)/"
                />)}
            />
            <View className="flex-1 items-start mx-4 mt-4 mb-5">
                <View className="flex-1 w-[100%] justify-between">
                    <Text className=" text-gray-500 py-4">Guardiões registrados: {data?.length}.</Text>
            
                    <FlatList 
                        contentContainerStyle={{ justifyContent: 'center', width: '100%'}}
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                className="w-full "
                                onPress={()=>{
                                    router.push({
                                        pathname: '/update_guardian/[data]',
                                        params: {data: JSON.stringify(item)}  
                                    })
                                }}
                            >
                                
                                <GuardianTab 
                                    name={item.name}
                                    phone={item.phone}
                                    id={item.id}
                                />
                            </TouchableOpacity>
                        )}
                    />
                    <ButtonDefault to={"/register_guardians"}>
                        <ButtonDefault.Icon>
                            <AntDesign name="plus" size={24} color="white" />
                        </ButtonDefault.Icon>
                        <ButtonDefault.Text>
                            Adicionar Guardiões
                        </ButtonDefault.Text>
                    </ButtonDefault>
                </View>
            </View>
        </>
    );
}
