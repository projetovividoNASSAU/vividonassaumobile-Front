import { View, TouchableOpacity, Text } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { ButtonDefault } from "../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Call } from "../../components/Call";
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
          <Call
            title="Minha vizinha está sofrendo violência doméstica"
            description="
              É um fato conhecido de todos que um leitor se distrairá 
              com o conteúdo de texto legível de uma página quando estiver 
              examinando sua diagramação. A vantagem de usar Lorem Ipsum é 
              que ele tem uma distribuição normal de letras, ao contrário 
              de Conteúdo aqui, conteúdo aqui, fazendo com que ele tenha 
              uma aparência similar a de um texto legível.
              "
            status={true}
            createdAt="Postada: 14:35:45 12/02/2032" 
            type={""}            
          />
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
