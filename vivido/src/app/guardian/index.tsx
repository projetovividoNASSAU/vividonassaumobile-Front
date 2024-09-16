import { View, Text, FlatList } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import GuardianTab from "../../components/Guardian";
import { ButtonDefault } from "../../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import { guadiansData } from "../../mocks/mock-guardians-data";

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
                    <FlatList 
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}
                        data={guadiansData}
                        renderItem={({item}) => (
                            <GuardianTab 
                                name={item.name}
                                type={item.type}
                                phone={item.phone}
                            />
                        )}
                    />
                    <ButtonDefault to={"/registerguardians"}>
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
