import { View, Text, TouchableWithoutFeedback, Keyboard  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import useSignupForm from "../../hooks/useSignupForm";
import Input from "../../components/Input";
import { ButtonPrimary } from "../../components/Button";
import Uninassau from "../../components/UninasauLogo";
import Legand from "../../components/Legand";

export default function Register() {
    const {
        control,
        Controller,
        handleOnSubmit,
        handleSubmit
    } = useSignupForm()
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View  className="flex-1 bg-white justify-evenly items-center">
                <TemplateLogo legend="Faça sua conta"/>
                <View className='w-[80%] flex flex-col gap-10'>
                    <View>
                        <Text className="font-subtitle">CPF:</Text>
                        <Controller
                            control={control}
                            name="cpf"
                            render={({field: {onChange}}) => (
                                <Input  
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                    <View>
                        <Text className="font-subtitle">E-mail:</Text>
                        <Controller
                            control={control}
                            name="email"
                            render={({field: {onChange}}) => (
                                <Input  
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                    <View>
                        <Text className="font-subtitle">Senha:</Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({field: {onChange}}) => (
                                <Input  
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                    <Legand
                        textPrimary="Não possui conta?"
                        textSecundary="Registre-se"
                    />
                    <View className="w-[100%] flex items-center justify-center mb-10">
                        <ButtonPrimary
                            onSubmit={handleSubmit(handleOnSubmit)}
                        >
                            <ButtonPrimary.TextPrimary>
                                Criar conta
                            </ButtonPrimary.TextPrimary>
                        </ButtonPrimary>
                    </View>
                </View>
                <Uninassau/>  
            </View>
        </TouchableWithoutFeedback>
    )
}
