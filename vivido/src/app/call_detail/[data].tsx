import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Pressable, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import useDeleteCallMutation from "../../hooks/mutations/useDeleteCallMutation";
import AntDesign from '@expo/vector-icons/AntDesign';

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
    console.log("Tem callback? ",info)

    return (
        <>
            <Header 
                titleHeader="Chamado"
                subtitleHeader={(<BackPage
                    to="/(tabs)/"
                />)}
            />
            <View className="flex-1 flex-col items-center w-full  gap-4">
                <View className="my-4">
                    <Text>
                        {info?.name}
                    </Text>
                    <Text className="text-grayprimary font-bold text-xl">
                        {info.title}
                    </Text>
                    <Text className="text-slate-400 text-sm">
                        14:35 - 12/02/2024
                    </Text>
                    <View className="w-[90%] flex flex-row gap-2 justify-between mt-4">
                        <Text className="bg-blue-100 text-center rounded-full px-10">{info?.type}</Text> 
                        <Text className="bg-yellow-400 text-center rounded-full px-6">{info?.nameFun}</Text>
                    </View>
                </View>
                <View className="flex flex-col h-[70%] justify-between">
                    <ScrollView className="w-full flex gap-3 border-spacing-2">
                        <Text className="text-base text-justify mx-6">
                            {info?.decricao}
                        </Text>
                    </ScrollView>
                </View>
            </View>
                {
                    info?.callback !== "Aguardando atualizações" ? (
                    <View
                        className="w-full flex h-[25%] flex-col items-center justify-between p-4 px-4"
                    >
                            <TouchableOpacity
                                onPress={()=>router.push({
                                    pathname: '/request_call_detail/[data]',
                                    params: {data: JSON.stringify(info)}
                                })}
                                className="bg-slate-200 flex flex-row py-3 px-14 justify-between w-full items-center gap-4 rounded-2xl"
                            >
                                <Text className="text-grayprimary font-bold text-lg">Visualizar solicitação</Text>
                                <AntDesign name="right" className="text-grayprimary font-bold text-lg" size={24} />                
                            </TouchableOpacity>
                            <View className="my-8 mx-4">
                                <Text className="text-grayprimary font-bold text-xl">
                                    Preview:
                                </Text>
                                <View className="w-[90%] flex flex-row justify-between my-2">
                                    <Text>
                                        Bruna Cardoso
                                    </Text>
                                    <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text> 
                                </View>
                                <Text className="text-base text-justify ">
                                    {
                                        info?.callback
                                    }
                                </Text>
                            </View>
                    </View>
                    ) : (
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
                    )
                } 
        </>
    )
};
