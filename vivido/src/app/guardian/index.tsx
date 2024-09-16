import { View, Text } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import GuardianTab from "../../components/Guardian";
import { Button, ButtonDefault } from "../../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Guadians() {
    return (
        <>
            <Header
                titleHeader="Guardiões"
                subtitleHeader="Estes são seus guardiões, em momentos de urgências você pode acionar-los."
            />
            <View className="flex-1 items-start mx-4 mb-5">
                <BackPage />
                <View className="flex-1  w-full items-center justify-between">
                    <View className="flex-1  w-full items-center justify-start">
                        <GuardianTab 
                            name="Maria Pereira"
                            type="Instucional"
                            phone="(00) 90000-0000"
                        />
                        <GuardianTab 
                            name="João pereira"
                            type="familiar"
                            phone="(00) 90000-0000"
                        />
                    </View>
                    <ButtonDefault to={""}>
                        <ButtonDefault.Icon>
                            <AntDesign name="plus" size={24} color="white" />
                        </ButtonDefault.Icon>
                        <ButtonDefault.Text>
                            Adicionar Guardiões
                        </ButtonDefault.Text>
                    </ButtonDefault>
                </View>
            </View>
        </>
    );
}
