import { View } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { ButtonDefault } from "../../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';

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

                    
                    <ButtonDefault to={"/registerguardians"}>
                        <ButtonDefault.Icon>
                            <AntDesign name="plus" size={24} color="white" />
                        </ButtonDefault.Icon>
                        <ButtonDefault.Text>
                            Novo Chamado
                        </ButtonDefault.Text>
                    </ButtonDefault>
            </View>
        </View>
    </>
    )
};
