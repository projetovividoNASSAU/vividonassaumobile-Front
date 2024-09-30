import { View, Text, TouchableOpacity } from "react-native";

export default function Content() {
    return (
        <View className="w-full ">
        <View className="border-t-2 2 py-2 w-[100%] flex items-start flex-col gap-6 border-gray-200">
          <Text className="font-subtitle">Minha vizinha vem sofrendo violência..</Text>
          <View className="flex flex-row items-center justify-between w-full">
          <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text>
          <Text className="bg-blue-100 text-center rounded-full px-10">Psicologia</Text>
        </View>
          <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
          of classical Latin literature from 45 BC, making it over 2000 years old.
          </Text>
        <View className="flex flex-row justify-between gap-3">
          <Text>Postada: 14:35:45 12/02/2032</Text>
          <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
        </View>
      </View>
    </View>
        
    )
}
