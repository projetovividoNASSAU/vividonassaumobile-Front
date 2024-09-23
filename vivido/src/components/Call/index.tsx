import { TouchableOpacity, View, Text } from "react-native";

interface CallProps {
    title:string
    description:string
    status:boolean
    createdAt:string 
    type:string
}

export  function Call(data: CallProps) {
    return (
        <TouchableOpacity className="w-full ">
        <View className="flex flex-col gap-6 w-full items-start justify-between border-[0.10rem] border-slate-200  py-4 p-3 ">
            <Text className="font-subtitle">Minha vizinha vem sofrendo violência doméstica desde 2025</Text>
            <View className="flex flex-row items-center justify-between w-full">
                   {/* orgãos */}
             <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text>
             <Text className="bg-blue-100 text-center rounded-full px-10">CIPiscologia</Text>
           </View>
            <Text>
                There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in 
                some form, by injected humour, or randomised words which 
                don't look even slightly believable. If you are going to 
                use a passage of Lorem Ipsum, you need to be sure there 
                isn't anything embarrassing hidden in the middle of text...
            </Text>
          <View className="flex flex-row justify-between gap-3">
            <Text>Postada: 14:35:45 12/02/2032</Text>
            {/* status */}
            <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada pendente</Text>
        </View>
        </View>
      </TouchableOpacity>
    )
};
