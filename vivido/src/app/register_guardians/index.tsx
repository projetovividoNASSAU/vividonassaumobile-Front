import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefaultReq } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputDefault } from "../../components/Input";
import { useCreateGuardianForm } from "../../hooks/useCreateGuardianForm";
import { useRouter } from "expo-router";

export default function RegisterGuardians() {
    const router = useRouter();
    const { Controller, control, handleSubmit, handleOnSubmit, isLoading } = useCreateGuardianForm();

    const onSubmit = (data: any) => {
        handleOnSubmit(data, () => {
            router.push("/guardian");  
        }, (error) => {
            console.error(error);
        });
    };

    return (
        <>
            <Header
                titleHeader="Novo Guardião"
                subtitleHeader={(<BackPage/>)}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 items-start mt-4 mx-4 mb-10">
                    <View className="flex-1 w-full items-center justify-between">
                        <View className="flex-1 w-full items-center py-5 gap-10 justify-start">
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
                        <ButtonDefaultReq 
                        onPress={handleSubmit(onSubmit)} 
                        disabled={isLoading}>
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
