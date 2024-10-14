import { View,Text,TouchableWithoutFeedback, Keyboard  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import Uninassau from "../../components/UninasauLogo";
import {Input} from "../../components/Input";
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
                                <Input  
                                    onChangeText={onChange}
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
            </View>
        </TouchableWithoutFeedback>
    )
}
