import { Modal, View, Text, Pressable, Alert,StyleSheet } from "react-native";
import { ToggleButton } from "../ToogleButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useState } from "react";
import * as Linking from 'expo-linking'
import useGetGuardiansQuery from "../../hooks/queries/useGetGuardiansQuery";
import { AuthContext } from "../../contexts/AuthContext";
import { isLoading } from "expo-font";

interface ModalOptionsProps {
    isVisibled: boolean;
    setIsVisibled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalOptions({ isVisibled, setIsVisibled }: ModalOptionsProps) {
    const [isActiveGuardians, setIsActiveGuardians] = useState(false)
    const [isActiveGovernment, setIsActiveGovernment] = useState(false)
    const {token, me} = useContext(AuthContext)
    const {data, isLoading} = useGetGuardiansQuery(token)
    const phone_URL = 'tel:190'

    const message = `
        ____________________________________________________

        **Extrema urgência**
        ____________________________________________________

        Olá equipe Vivido lhe constatá que 
        a usuário ${me}, está em estado de extrema urgência.

        Contate um de nossos colaboradores!!!



    `
    
    const handleSendMessageGuardians = () => {
        if (!isLoading) {
            data?.map((guardian)=>{
                const phone_number = '55994193056'

                Linking.openURL(`http://api.whatsapp.com/send?phone=${phone_number}&text=${message}`)
            })
        }
    }   

    const handleNumberTel = () => {
        Linking.openURL('tel:190')
    }

    const handleCall = () => {
        console.log('Acionando chamado')
        if (isActiveGovernment) {
            handleNumberTel()
            console.log('Alertando órgãos do governo...')
        } else if (isActiveGuardians) {
            handleSendMessageGuardians()
            console.log('Alertando guardiões...')
        }
    }
    
    return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isVisibled}
        onRequestClose={() => setIsVisibled(false)}
    >
        <View style={styles.transparentBg}>
        <View className="w-[90%] h-[60%] bg-white p-5 rounded-lg justify-between items-center">
            <View className="w-full flex flex-row items-start">
                <Pressable
                    className=" pt-3 items-center rounded-md flex-row"
                    onPress={() => setIsVisibled(false)}
                >
                    <AntDesign name="left" size={24} color="gray" />
                    <Text className="font-bold text-gray-500"> Voltar</Text>
                </Pressable>
            </View>
            <View className="w-full">
                <Text className="text-xl font-bold text-grayprimary">Acionamento de Pânico</Text>
                <Text className="text-start mt-2 text-grayprimary">Contate os seus guardiões e órgãos do governo, neste caso de urgência</Text>
            </View>
            <View className="w-full flex gap-6 flex-col">
                <ToggleButton 
                    isActive={isActiveGuardians}
                    setIsActive={setIsActiveGuardians}
                    title="Alertar guardiões"
                    subtitle="Via whatsapp, encaminhar mensagem ..."
                />
                <ToggleButton 
                    isActive={isActiveGovernment}
                    setIsActive={setIsActiveGovernment}
                    title="Alertar órgãos do governo"
                    subtitle="Discagem direta para acionamento ..."
                />
            </View>
            <View
                className="w-full flex flex-row items-center justify-between"
            >
                <Pressable
                    className="bg-redcherry p-3 rounded-full w-full px-10 items-center"
                    onPress={handleCall}
                >
                    <Text className="text-white font-bold">Concluir Acionameto</Text>
                </Pressable>
            </View>
        </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    transparentBg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(20, 41, 59, 0.8)',
    },
  });