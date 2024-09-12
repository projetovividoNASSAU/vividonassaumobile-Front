import { View, Text, TouchableOpacity } from "react-native";

export default function Content() {
    return (
        <TouchableOpacity className="border-t-2 border-b-2 py-2 w-[100%] flex items-start flex-col gap-6 border-gray-200">
            <View className="flex flex-col items-start ">
                <Text className="font-title text-grayprimary  text-md">
                    Minha vizinha vem sofrendo violência...
                </Text>
                <Text>
                    23:39 - 12/03/2024
                </Text>

                <View  className="bg-blue-200 w-fit px-5 rounded-full">
                    <Text className="text-blue-400 font-bold">
                        Escola Psicologia
                    </Text>
                </View>
            </View>
            <Text>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                of classical Latin literature from 45 BC, making it over 2000 years old.
            </Text>
            <View  className="bg-yellow-400 w-fit px-5 rounded-full">
                <Text className="text-white font-bold">Chamada solicitada</Text>
            </View>
        </TouchableOpacity>
    )
}
