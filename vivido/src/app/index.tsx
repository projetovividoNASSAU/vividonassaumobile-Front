import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button, ButtonSecundary } from "../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import TemplateLogo from "../components/TemplateLogo";
import Uninassau from "../components/UninasauLogo";
import Legand from "../components/Legand";

export default function App() {
  return (
    <View className="flex-1 bg-white justify-evenly items-center">
        <TemplateLogo legend='Permita-se ser ajudado'/>
        <View className='w-[80%] flex flex-col gap-10'>
            <Button to='/login'>
                <Button.Text>
                    Entrar
                </Button.Text>
                <Button.Icon>
                    <AntDesign name="right" size={20} color="white" />
                </Button.Icon>
            </Button>
            <ButtonSecundary to={'/register'}>
                <ButtonSecundary.TextSecudary>
                    Registrar-se
                </ButtonSecundary.TextSecudary>
            </ButtonSecundary>
        </View>
        <Legand
            to=""
            textPrimary="Não se cale, "
            textSecundary="Denúcie!"
        />
        <Uninassau />
        <StatusBar style="auto" />
    </View>
  );
}
