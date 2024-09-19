import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefault, ButtonDefaultReq } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { InputDefault } from "../../components/Input";
import { useCreateGuardianForm } from "../../hooks/useCreateGuardianForm";

export default function RegisterGuardians() {
    const { Controller, control, handleSubmit, handleOnSubmit, isLoading } = useCreateGuardianForm();

    return (
        <>
            <Header
                titleHeader="Registrar Guardiões"
                subtitleHeader="Registrando seus guardiões, em momentos de urgências você pode acionar-los."
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 items-start mx-4 mb-10">
                    <BackPage />
                    <View className="flex-1 w-full items-center justify-between">
                        <View className="flex-1 w-full items-center border-t-2 border-gray-300 py-5 gap-10 justify-start">
                            <View className="w-full flex flex-col items-center">
                                <View className="w-full">
                                    <Text className="font-subtitle text-xs">Nome:</Text>
                                    <Controller
                                        control={control}
                                        name="name"
                                        render={({ field: { onChange } }) => (
                                            <InputDefault placeholder="Nome do guardião ..." onChangeText={onChange} />
                                        )}
                                    />
                                </View>
                            </View>
                            <View className="w-full flex flex-col items-center">
                                <View className="w-full">
                                    <Text className="font-subtitle text-xs">Telefone:</Text>
                                    <Controller
                                        control={control}
                                        name="phone"
                                        render={({ field: { onChange } }) => (
                                            <InputDefault placeholder="Contato do guardião ..." onChangeText={onChange} />
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                        <ButtonDefaultReq onPress={handleSubmit(handleOnSubmit)} disabled={isLoading}>
                            <ButtonDefaultReq.Text>
                                {isLoading ? 'Registrando...' : 'Registrar Guardião'}
                            </ButtonDefaultReq.Text>
                        </ButtonDefaultReq>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}
