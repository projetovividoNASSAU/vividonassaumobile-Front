import { Modal, View, Text, Pressable, Linking } from "react-native";
import { ToggleButton } from "../ToogleButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";

interface ModalOptionsProps {
    isVisibled: boolean;
    setIsVisibled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalOptions({ isVisibled, setIsVisibled }: ModalOptionsProps) {
    const [isActiveGuardians, setIsActiveGuardians] = useState(false);
    const [isActiveGovernment, setIsActiveGovernment] = useState(false)

    
    const handleNumberTel = async () => {
        const phoneNumber = 'tel:190'
        try {
            const supported = await Linking.canOpenURL(phoneNumber)
            if(supported) {
                console.log('abrindo chamada')
                await Linking.openURL(phoneNumber)
            } else {
                console.log('este telefône não suporta ligações telefônicas')
            }
        } catch (error) {
            console.error('Erro ao tentar abrir a chamada:', error);
        }
    }

    const handleCall = () => {
        console.log('Acionando chamado');
        if (isActiveGovernment) {
            handleNumberTel();
            console.log('Alertando órgãos do governo...');
        } else if (isActiveGuardians) {
            console.log('Alertando guardiões...');
        }
    };
    
    return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isVisibled}
        onRequestClose={() => setIsVisibled(false)}
    >
        <View className="flex-1 justify-center items-center bg-slate-700 !bg-opacity-80">
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
