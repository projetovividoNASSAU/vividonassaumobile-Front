import { TouchableOpacity, View, Text } from "react-native";

interface CallProps {
    title:string
    description:string
    status?:boolean
    createdAt:string 
    type:string,
    
}

export  function Call({title,description,status,type,createdAt}: CallProps) {
    return (
        <View className="w-full ">
          <View className="flex flex-col gap-6 w-full items-start justify-between border-[0.10rem] border-slate-200  py-4 p-3 ">
            <Text className="font-subtitle">{title}</Text>
            <View className="flex flex-row items-center justify-between w-full">
            <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text>
            <Text className="bg-blue-100 text-center rounded-full px-10">CIPiscologia</Text>
          </View>
            <Text>
                {description}
            </Text>
          <View className="flex flex-row justify-between gap-3">
            <Text>Postada: 14:35:45 12/02/2032</Text>
            <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
          </View>
        </View>
      </View>
    ) 
};
