import { View,Text,TouchableWithoutFeedback, Keyboard  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import Uninassau from "../../components/UninasauLogo";
import Input from "../../components/Input";
import { ButtonPrimary } from "../../components/Button";
import useSignInForm from "../../hooks/useSigninForm";
import Legand from "../../components/Legand";

export default function Login() {
    const {
        Controller,
        control,
        handleOnSubmit,
        handleSubmit
    } = useSignInForm()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View  className="flex-1 justify-evenly items-center">
                <TemplateLogo legend="Entre com sua conta"/>
                <View className='w-[80%] flex flex-col gap-10 mt-6'>
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
                        textPrimary="Já possui conta?"
                        textSecundary="Entrar"
                    />
                    <View className="w-[100%] flex items-center justify-center mb-6">
                        <ButtonPrimary
                            onSubmit={handleSubmit(handleOnSubmit)}
                        >
                            <ButtonPrimary.TextPrimary>
                                Entrar
                            </ButtonPrimary.TextPrimary>
                        </ButtonPrimary>
                    </View>
                </View>
                <Uninassau/>    
            </View>
        </TouchableWithoutFeedback>
    )
}
