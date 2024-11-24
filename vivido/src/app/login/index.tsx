import { View,Text,TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import Uninassau from "../../components/UninasauLogo";
import {Input, InputPassword} from "../../components/Input";
import { ButtonPrimary } from "../../components/Button";
import useSignInForm from "../../hooks/useSigninForm";
import Legand from "../../components/Legand";

export default function Login() {
    const {
        Controller,
        control,
        handleOnSubmit,
        handleSubmit,
        isLoading
    } = useSignInForm()

    console.log(isLoading)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View  className="flex-1 bg-white justify-center items-center pt-24">
                <TemplateLogo legend="Conecte-se"/>
                <View className='w-[80%] flex flex-col gap-10 m-14'>
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
                                    onChangeText={onChange} 
                                    placeholder={""}                                
                                />
                            )}
                        />
                    </View>
                    <Legand
                        to="register"
                        textPrimary="Não possui conta?"
                        textSecundary="Registre-se"
                    />
                    <View className="w-[100%] flex items-center justify-center mb-6">
                        <ButtonPrimary
                            disabled={isLoading}
                            onSubmit={handleSubmit(handleOnSubmit)}
                        >
                            <ButtonPrimary.TextPrimary>
                                {isLoading ?'Carregando...':'Entrar'}
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
