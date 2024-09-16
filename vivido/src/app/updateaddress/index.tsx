import { View, Text } from "react-native"
import Header from "../../components/Header"
import BackPage from "../../components/BackPage"
import { ButtonPrimary } from "../../components/Button"
import { InputUpdate } from "../../components/Input"
import {useAddressUpdateForm} from "../../hooks/useUpdateForm"

export default function AddressUpdate() {
    const {
        Controller,
        control,
        handleOnSubmit,
        handleSubmit
    } = useAddressUpdateForm()
    return (
        <>
        <Header 
            titleHeader="Endereço"
            subtitleHeader="Atualize suas informações de endereço"
        />
        <View className="flex-1 items-start justify-start px-3">
        <BackPage />
            <View className="w-full h-[80%] flex flex-col justify-between">
                <View className="w-full flex flex-col items-center h-[40%] gap-6  justify-between border-t-2 border-gray-300 pt-8">
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Cep:</Text>
                            <Controller
                                control={control}
                                name="cep"
                                render={({field: {onChange}}) => (
                                    <InputUpdate
                                        placeholder="0000000-00"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Bairro:</Text>
                            <Controller
                                control={control}
                                name="bairro"
                                render={({field: {onChange}}) => (
                                    <InputUpdate
                                        placeholder="Parque Piaui"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Cidade:</Text>
                            <Controller
                                control={control}
                                name="cidade"
                                render={({field: {onChange}}) => (
                                    <InputUpdate
                                        placeholder="Teresina"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Estado:</Text>
                            <Controller
                                control={control}
                                name="estado"
                                render={({field: {onChange}}) => (
                                    <InputUpdate
                                        placeholder="PI"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View className="w-full flex flex-col items-center">
                        <View className="w-full">
                            <Text className="font-subtitle text-xs">Complemento:</Text>
                            <Controller
                                control={control}
                                name="complemento"
                                render={({field: {onChange}}) => (
                                    <InputUpdate
                                        placeholder="example: Rua maria rui avenida 20"
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
