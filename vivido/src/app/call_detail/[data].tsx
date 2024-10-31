import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import useDeleteCallMutation from "../../hooks/mutations/useDeleteCallMutation";
import { formatData } from '../../components/Call/index';
export default function CallDetail() {
    const {data} = useLocalSearchParams()
    const info = typeof data === 'string' ? JSON.parse(data) : null

    const deleteCallMutation = useDeleteCallMutation()
    const router = useRouter()
    const handleDelete = () => {
        deleteCallMutation.mutate(
            info.id,
            {
                onSuccess: () => {
                    console.log('deu certo')
                    router.push('/calls')
                },
                onError: () => {
                    console.log('peun peun peun... deu errado')
                }
            }
        )   
    }
    console.log(info.time)

    return (
        <>
            <Header 
                titleHeader="Chamado"
                subtitleHeader={(<BackPage
                    to="/(tabs)/"
                />)}
            />
            <View className="flex-1 flex-col items-start w-full mx-4 gap-4">
                <View className="flex flex-col h-[80%] justify-between">
                    <View className="w-full flex gap-3 border-spacing-2">
                        <Text className="text-grayprimary font-subtitle text-2xl py-5">{info.title}</Text>
                        <View className="w-[90%] flex flex-row justify-between ">
                            <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
                            <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text> 
                        </View>
                        <View className="flex flex-row w-[90%] justify-between">
                            <Text>Postada: {formatData(info.time)}</Text>
                        </View>
                        <Text className="text-xl">{info.decricao}</Text>
                    </View>
                    <View className="w-full flex gap-3">
                        <Text className="text-grayprimary font-subtitle">Principais informações:</Text>
                        <View className="flex flex-row gap-6">
                            <Text>Endereço: {info.adress}</Text>
                        </View>
                        <View className="w-full items-start flex">
                            <Text className=" text-center rounded-full ">funcionário responsável: {info.nameFun}</Text>
                        </View>
                        <Text>Contato: {info.phone}</Text>
                    </View>
                </View>
            </View>
            <View
                className="w-full flex flex-row items-center justify-between p-4"
            >
                <Pressable
                    onPress={handleDelete}
                    className="bg-gray-200 p-3 rounded-lg px-10  flex flex-row items-center"
                >
                    <FontAwesome5 name="trash-alt" size={24} className="!text-gray-600 " />
                    <Text className="text-gray-600 font-bold">Remover</Text>
                </Pressable>
                <Link
                    href={{
                        pathname: '/update_call/[data]',
                        params: {data: JSON.stringify(info)}
                        
                    }}
                    className="bg-redcherry p-3 rounded-lg px-10 flex flex-row items-center"
                    >
                        <Feather name="edit" className="!text-white" size={24} />
                        <Text className="text-white font-bold">Editar</Text>
                </Link>
            </View>
        </>
    )
};
