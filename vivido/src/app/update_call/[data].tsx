import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { InputDefault } from "../../components/Input";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { ButtonDefaultReq } from "../../components/Button";
import { useUpdateCallForm } from "../../hooks/useUpdateCallForm";
import { CallProps } from "../../hooks/types/call";

export default function UpdateCall() {
    const { data } = useLocalSearchParams();
    const info = typeof data === 'string' ? JSON.parse(data) : null;


    const { control, handleSubmit, handleOnSubmit, isLoading, reset, Controller } = useUpdateCallForm(info);

    useEffect(() => {
        if (info) {
            reset({
                title: info.title || '', 
                descricao: info.decricao || ''
            });
        }
    }, []);

    return (
        <>
            <Header
                titleHeader="Atualizar Chamado"
                subtitleHeader={(<BackPage/>)}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 items-start mx-4 mb-10">
                    <View className="flex-1 w-full items-center justify-between">
                        <View className="flex-1 w-full items-center py-5 gap-10 justify-start">
                            <View className="w-full flex flex-col items-center">
                                <View className="w-full">
                                    <Text className="font-subtitle text-xs">titulo:</Text>
                                    <Controller
                                        control={control}
                                        name="title"
                                        defaultValue={info?.title || ''}
                                        render={({ field: { onChange, value } }) => (
                                            <InputDefault
                                                placeholder="Título do chamado"
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                            <View className="w-full flex flex-col items-center">
                                <View className="w-full">
                                    <Text className="font-subtitle text-xs">descrição:</Text>
                                    <Controller
                                        control={control}
                                        name="descricao"
                                        defaultValue={info?.decricao || ''}
                                        render={({ field: { onChange, value } }) => (
                                            <InputDefault
                                                placeholder="Relate a ocorrência"
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
                                {isLoading ? 'Salvando chamada...' : 'Atualizar Chamada'}
                            </ButtonDefaultReq.Text>
                        </ButtonDefaultReq>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};
