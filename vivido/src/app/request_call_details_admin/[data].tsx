import { TouchableOpacity, Text,View } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { useLocalSearchParams } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RequestCallDetails() {
    const {data} = useLocalSearchParams()
    const info = typeof data === 'string' ? JSON.parse(data) : null
    return(
    <>
        <Header 
                titleHeader="Solicitação"
                subtitleHeader={<BackPage to={"/(tabs_admin)"}/>}
        />
        <View className="h-[80%] mx-4 my-4 flex flex-col justify- items-center">
            <TouchableOpacity
                // onPress={()=>router.push({
                //     pathname: '/request_call_admin',
                //     params: {data: JSON.stringify(info)}
                // })}
                className="bg-slate-200 flex flex-row py-3 px-14 mx-8 justify-between w-full items-center gap-4 rounded-2xl"
            >
                <Text className="text-grayprimary font-bold text-lg">Solicitação Encaminhada</Text>
            </TouchableOpacity>
            <View className="my-2 mx-4">
                <View className="w-[100%] flex flex-row justify-between my-2">
                    <View className="flex flex-row items-center gap-4">
                        <FontAwesome5 name="user-alt" size={14} color="gray" />
                        <Text className="font-semibold text-gray-500">
                            {info?.name}
                        </Text>
                    </View>
                    <Text className="bg-blue-100 text-center rounded-full px-10">{info?.type}</Text> 
                </View>
                <Text className="text-base text-justify my-8">
                    {
                        info?.callback
                    }
                </Text>
            </View>
        </View>
        <View className="w-[95%] flex flex-row justify-end mb-6">
            <Text className="bg-teal-800 text-center rounded-full px-6 text-white">Chamado fechado</Text>
        </View>
    </>
    )
};
