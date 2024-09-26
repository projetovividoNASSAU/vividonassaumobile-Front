import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefaultReq } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputDefault } from "../../components/Input";
import { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import useUpdateGuardianForm from "../../hooks/useUpdateGuardianForm";

export default function UpdateGuardians() {
    const { data } = useLocalSearchParams();
    const info = typeof data === 'string' ? JSON.parse(data) : null;

    
    const { control, handleSubmit, handleOnSubmit, isLoading, reset, Controller, setValue } = useUpdateGuardianForm(info);

    useEffect(() => {
        if (info) {
            reset({
                name: info.name || '', 
                phone: info.phone || '' 
            });
        }
    }, []);

    return (
        <>
            <Header
                titleHeader="Atualizar Guardião"
                subtitleHeader="Atualize as informações dos seus guardiões em caso de emergência."
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
                                        defaultValue={info?.name || ''}
                                        render={({ field: { onChange, value } }) => (
                                            <InputDefault
                                                placeholder="Nome do Guardião"
                                                onChangeText={onChange}
                                                value={value}
                                            />
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
                                        defaultValue={info?.phone || ''}
                                        render={({ field: { onChange, value } }) => (
                                            <InputDefault
                                                placeholder="Telefone do Guardião"
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                        <ButtonDefaultReq 
                            onPress={handleSubmit(handleOnSubmit)} 
                            disabled={isLoading}
                        >
                            <ButtonDefaultReq.Text>
                                {isLoading ? 'Atualizando...' : 'Atualizar Guardião'}
                            </ButtonDefaultReq.Text>
                        </ButtonDefaultReq>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}
