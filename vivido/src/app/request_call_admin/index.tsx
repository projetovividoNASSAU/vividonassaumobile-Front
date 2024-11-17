import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputUpdate } from "../../components/Input";
import { useState } from "react";


export default function RequestCall() {
    const [change, onChange] = useState("")
    return(
        <>
        <Header
            titleHeader="Abrir Chamado"
            subtitleHeader={(<BackPage
                    to="/(tabs_admin)/"
            />)}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 items-start mx-4 mb-10">
            <View className="flex-1  w-full items-center justify-between">
                <Text className="text-grayprimary w-full mt-4 font-bold text-xl">
                    Encaminhando para:
                </Text>
                <View className="w-[100%] my-4">
                    <Text>
                        Bruna Cardoso
                    </Text>
                    <Text className="text-grayprimary font-bold text-xl">
                        Minha vizinha vem sofrendo vio...
                    </Text>
                    <Text className="text-slate-400 text-sm">
                        14:35 - 12/02/2024
                    </Text>
                </View>
                <View className="flex-1 w-full items-center  py-5 gap-10 justify-start">
                        <InputUpdate placeholder="Detalhes da causa ..." onChangeText={onChange} />
                </View>
                <View
                className="w-full flex flex-row items-center justify-between p-4 px-8"
            >
                <TouchableOpacity
                    // onPress={()=>router.push({
                    //     pathname: '/request_call_admin',
                    //     params: {data: JSON.stringify(info)}
                    // })}
                    className="bg-grayprimary flex flex-row py-3 px-5 justify-center w-full items-center gap-4 rounded-2xl"
                >
                        <Text className="text-white text-base">Completar solicitação</Text>
                        {/* <FontAwesome5 name="hands-helping" size={24} className="!text-white" /> */}
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
        </>
    )
};
