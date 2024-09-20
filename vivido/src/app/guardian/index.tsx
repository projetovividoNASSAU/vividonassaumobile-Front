import { View, Text, FlatList } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import GuardianTab from "../../components/Guardian";
import { ButtonDefault } from "../../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import { guadiansData } from "../../mocks/mock-guardians-data";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useGetGuardiansQuery from "../../hooks/queries/useGetGuardiansQuery";

export default function Guadians() {
    const {token} = useContext(AuthContext)

    const {data,error,isLoading} = useGetGuardiansQuery(token)
    console.error(error)
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
                        data={data}
                        renderItem={({item}) => (
                            <GuardianTab 
                                name={item.name}
                                type={'familiar'}
                                phone={item.phone}
                            />
                        )}
                    />
                    <ButtonDefault to={"/register_guardians"}>
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
