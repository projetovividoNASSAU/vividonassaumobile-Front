import { View, Text } from "react-native"
import Header from "../../components/Header"
import BackPage from "../../components/BackPage"
import { ButtonPrimary } from "../../components/Button"
import { InputDefault } from "../../components/Input"
import { useAddressUpdateForm } from "../../hooks/useUpdateForm"
import { useLocalSearchParams } from "expo-router"

export default function AddressUpdate() {
    const { data } = useLocalSearchParams();
    const info = typeof data === 'string' ? JSON.parse(data) : null;


    const {
        Controller,
        control,
        handleOnSubmit,
        handleSubmit
    } = useAddressUpdateForm(info)

    return (
        <>
        <Header 
            titleHeader="Endereço"
            subtitleHeader={(<BackPage
                    to="/profile"
            /> )}
        />
        <View className="flex-1 items-start justify-start px-3">
            <View className="w-full h-[80%] flex flex-col justify-between">
                <View className="w-full flex flex-col items-center h-[40%] gap-6  justify-between  pt-8">
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Cep:</Text>
                            <Controller
                                control={control}
                                name="cep"
                                render={({field: {onChange}}) => (
                                    <InputDefault
                                        placeholder="0000000-00"
                                        onChangeText={onChange}
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
                                render={({field: {onChange}}) => (
                                    <InputDefault
                                        placeholder="Teresina"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Endereço:</Text>
                            <Controller
                                control={control}
                                name="adress"
                                render={({field: {onChange}}) => (
                                    <InputDefault
                                        placeholder="Ex: Rua X, cidade, estado"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
                <View className="w-[100%] flex items-center justify-center mb-6">
                    <ButtonPrimary
                        onSubmit={handleSubmit(handleOnSubmit)}
                    >
                        <ButtonPrimary.TextPrimary>
                            Salvar
                        </ButtonPrimary.TextPrimary>
                    </ButtonPrimary>
                </View>
            </View>
        </View>
    </>
    )
};
