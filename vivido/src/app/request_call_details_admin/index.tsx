import { TouchableOpacity, Text,View } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";

export default function RequestCallDetails() {
    return(
    <>
        <Header 
                titleHeader="Solicitação"
                subtitleHeader={<BackPage to={"/request_call_admin"}/>}
        />
        <View className="h-[80%] mx-4 my-4 flex flex-col justify-between items-center">
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
                <View className="w-[90%] flex flex-row justify-between my-2">
                    <Text>
                        Bruna Cardoso
                    </Text>
                    <Text className="bg-blue-100 text-center rounded-full px-10">NPJ</Text> 
                </View>
                <Text className="text-base text-justify ">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in 
                a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in 
                a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots i
                n a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                </Text>
            </View>
            <View className="w-[100%] flex flex-row justify-end mT-3">
                    <Text className="bg-yellow-400 text-center rounded-full px-6 mr-3">Chamada pendente</Text>
            </View>
        </View>
    </>
    )
};
