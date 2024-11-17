import { router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import AntDesign from '@expo/vector-icons/AntDesign';



export default function CallDetail() {
    const {data} = useLocalSearchParams()
    const info = typeof data === 'string' ? JSON.parse(data) : null


    return (
        <>
            <Header 
                titleHeader="Chamado"
                subtitleHeader={<BackPage to={""}/>}
            />
            <View className="flex-1 flex-col items-center w-full  gap-4">
                <View className="my-4">
                    <Text>
                        Bruna Cardoso
                    </Text>
                    <Text className="text-grayprimary font-bold text-xl">
                        {info.title}
                    </Text>
                    <Text className="text-slate-400 text-sm">
                        14:35 - 12/02/2024
                    </Text>
                    <View className="w-[90%] flex flex-row justify-between mt-4">
                        <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text> 
                        <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
                    </View>
                </View>
                <View className="flex flex-col h-[70%] justify-between">
                    <ScrollView className="w-full flex gap-3 border-spacing-2">
                        <Text className="text-base text-justify mx-6">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                        of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 
                        BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to 
                        popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 
                        45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
                        roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to
                        popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                        piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not 
                        simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
                        from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum 
                        is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                        </Text>
                    </ScrollView>
                </View>
            </View>
            <View
                className="w-full flex h-[25%] flex-col items-center justify-between p-4 px-4"
            >
                <TouchableOpacity
                    onPress={()=>router.push({
                        pathname: '/request_call_details_admin',
                        params: {data: JSON.stringify(info)}
                    })}
                    className="bg-slate-200 flex flex-row py-3 px-14 justify-between w-full items-center gap-4 rounded-2xl"
                >
                    <Text className="text-grayprimary font-bold text-lg">Visualizar solicitação</Text>
                    <AntDesign name="right" className="text-grayprimary font-bold text-lg" size={24} />                
                </TouchableOpacity>
                <View className="my-2 mx-4">
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
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                        of classical Latin literature from 45 BC.
                        
                    </Text>
                </View>
                {/* <TouchableOpacity
                    onPress={()=>router.push({
                        pathname: '/request_call_admin',
                        params: {data: JSON.stringify(info)}
                    })}
                    className="bg-grayprimary flex flex-row py-3 px-5 justify-center w-full items-center gap-4 rounded-2xl"
                >
                        <Text className="text-white text-base">Solicitar causa</Text>
                </TouchableOpacity> */}
            </View>
        </>
    )
};
