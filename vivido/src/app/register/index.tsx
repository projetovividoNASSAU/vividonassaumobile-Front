import { View, Text, TouchableWithoutFeedback, Keyboard  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import useSignupForm from "../../hooks/useSignupForm";
import {Input, InputPassword} from "../../components/Input";
import { ButtonPrimary } from "../../components/Button";
import Uninassau from "../../components/UninasauLogo";
import Legand from "../../components/Legand";

export default function Register() {
    const {
        control,
        Controller,
        handleOnSubmit,
        handleSubmit,
        isLoading
    } = useSignupForm()
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View  className="flex-1 bg-white justify-center items-center mt-14">
                <TemplateLogo legend="Registre-se"/>
                <View className='w-[80%] flex flex-col gap-5 mt-10 '>
                    <View>
                        <Text className="font-subtitle">Nome Completo:</Text>
                        <Controller
                            control={control}
                            name="name"
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
                            name="login"
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
                                <InputPassword
                                    placeholder=""  
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                    <Legand
                        to="/login"
                        textPrimary="Já possui conta?"
                        textSecundary="Entre já"
                    />
                    <View className="w-[100%] flex items-center justify-center mb-10">
                        <ButtonPrimary
                            disabled={isLoading}
                            onSubmit={handleSubmit(handleOnSubmit)}
                        >
                            <ButtonPrimary.TextPrimary>
                                {!isLoading ? ' Criar conta': 'Carregando...'}
                            </ButtonPrimary.TextPrimary>
                        </ButtonPrimary>
                    </View>
                </View>
                <Uninassau/>  
                <Text className="text-slate-600 font-semibold">powered by Diego <Text className="text-redcherry">|</Text> Bruna</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
