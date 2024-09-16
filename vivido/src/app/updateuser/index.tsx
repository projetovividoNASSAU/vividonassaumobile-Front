import { View, Text } from "react-native"
import Header from "../../components/Header"
import BackPage from "../../components/BackPage"
import {useUserUpdateForm} from "../../hooks/useUpdateForm"
import { Input, InputUpdate } from "../../components/Input"
import { Button, ButtonPrimary } from "../../components/Button"
export default function UserUpdate () {
    const {
        Controller,
        control,
        handleOnSubmit,
        handleSubmit
    } = useUserUpdateForm()
    return (    
        <>
            <Header 
                titleHeader="Conta"
                subtitleHeader="Atualize suas informações de usuário"
            />
            <View className="flex-1 items-start justify-start px-3">
            <BackPage />
                <View className="w-full h-[80%] flex flex-col justify-between">
                    <View className="w-full flex flex-col items-center h-[40%] gap-6  justify-between border-t-2 border-gray-300 pt-8">
                        <View className="w-full flex flex-col items-center">
                            <View className="w-full">
                                <Text className="font-subtitle text-xs">Nome:</Text>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({field: {onChange}}) => (
                                        <InputUpdate
                                            placeholder="Bruna Fernandes"
                                            onChangeText={onChange}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                        <View className="w-full flex flex-col items-center">
                            <View className="w-full">
                                <Text className="font-subtitle text-xs">E-mail:</Text>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({field: {onChange}}) => (
                                        <InputUpdate
                                            placeholder="example@gmail.com"
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
                                    name="telefone"
                                    render={({field: {onChange}}) => (
                                        <InputUpdate
                                            placeholder="(00)00000-0000"
                                            onChangeText={onChange}
                                        />
                                    )}
                                />
                            </View>
                        </View>
                        <View className="w-full flex flex-col items-center">
                            <View className="w-full">
                                <Text className="font-subtitle text-xs">Senha:</Text>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({field: {onChange}}) => (
                                        <InputUpdate
                                            placeholder="********"
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
}