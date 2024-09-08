import { View,Text,TouchableWithoutFeedback, Keyboard  } from "react-native";
import TemplateLogo from "../../components/TemplateLogo";
import Uninassau from "../../components/UninasauLogo";
import Input from "../../components/Input";
import { useForm, Controller } from "react-hook-form";
import { ButtonPrimary } from "../../components/Button";

export default function Login() {
    const {control, handleSubmit} = useForm()

    function handleOnSubmit (data: any) {
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View  className="flex-1 justify-evenly items-center">
                <TemplateLogo legend="Login"/>
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
                    <View className="w-[100%] flex items-center justify-center">
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
