import { View,TouchableOpacity, Text } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { ButtonDefault } from "../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
export default function Calls() {
  return (
    <>
      <Header
        titleHeader="Chamados"
        subtitleHeader=" Acompanhe o progresso de seus chamados"
      />
      <View className="flex-1 items-start mx-4 mb-5">
        <BackPage />
        <View className="flex-1  w-full items-center justify-between">
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
                <Text className="bg-yellow-400 text-center rounded-full px-6">Chamada solicitada</Text>
            </View>
            </View>
          </TouchableOpacity>

          <ButtonDefault to={"/register_call"}>
            <ButtonDefault.Icon>
              <AntDesign name="plus" size={24} color="white" />
            </ButtonDefault.Icon>
            <ButtonDefault.Text>Novo Chamado</ButtonDefault.Text>
          </ButtonDefault>
        </View>
      </View>
    </>
  );
}
