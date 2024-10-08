import { Link, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import useDeleteCallMutation from "../../hooks/mutations/useDeleteCallMutation";
export default function CallDetail() {
    const {data} = useLocalSearchParams()
    const info = typeof data === 'string' ? JSON.parse(data) : null

    const deleteCallMutation = useDeleteCallMutation()

    const handleDelete = () => {
        deleteCallMutation.mutate(
            info.id,
            {
                onSuccess: () => {
                    console.log('deu certo')
                },
                onError: () => {
                    console.log('peun peun peun... deu errado')
                }
            }
        )   
    }

    return (
        <>
            <Header 
                titleHeader="Detalhes do Chamado"
                subtitleHeader="Todas informações do chamado realizado"
            />
            <View className="flex-1 flex-col items-start w-full mx-4 gap-4">
                <View className="mt-8">
                    <BackPage />
                </View>
                <View className="flex flex-col h-[80%] justify-between">
                    <View className="w-full flex gap-3 border-spacing-2">
                        <Text className="text-grayprimary font-subtitle text-2xl">{info.title}</Text>
                        <View className="flex flex-row gap-6">
                            <Text>Postada: 14:35:45 12/02/2032</Text>
                            <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
                        </View>
                        <View className="w-full items-start flex">
                            <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text> 
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
                <Link
                    href={{
                        pathname: '/update_call/[data]',
                        params: {data: JSON.stringify(info)}

                    }}
                    className="bg-redcherry flex flex-row justify-center w-full items-center rounded-lg"
                >
                    <View className="w-full !flex !flex-row  items-center justify-center">
                        <Text className="text-white font-bold">Solicitar causa</Text>
                        <Feather name="edit" className="!text-white" size={24} />
                    </View>
                </Link>
            </View>
        </>
    )
};
