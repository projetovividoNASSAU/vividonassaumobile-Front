import { Modal, View, Text, Pressable } from "react-native";
import { ToggleButton } from "../ToogleButton";
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModalOptionsProps {
    isVisibled: boolean;
    setIsVisibled: React.Dispatch<React.SetStateAction<boolean>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    isActive:boolean
}

export default function ModalOptions({ isVisibled, setIsVisibled, isActive, setIsActive }: ModalOptionsProps) {
    return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isVisibled}
        onRequestClose={() => setIsVisibled(false)}
    >
        <View className="flex-1 justify-center items-center bg-black !bg-opacity-80">
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
                    isActive={isActive}
                    setIsActive={setIsActive}
                    title="Alertar guardiões"
                    subtitle="Via whatsapp, encaminhar mensagem ..."
                />
                <ToggleButton 
                    isActive={isActive}
                    setIsActive={setIsActive}
                    title="Alertar órgãos do governo"
                    subtitle="Discagem direta para acionamento ..."
                />
            </View>
            <View
                className="w-full flex flex-row items-center justify-between"
            >
                <Pressable
                    className="bg-redcherry p-3 rounded-full w-full px-10 items-center"
                    onPress={() => {
                    setIsVisibled(false);
                    }}
                >
                    <Text className="text-white font-bold">Concluir Acionameto</Text>
                </Pressable>
            </View>
        </View>
        </View>
    </Modal>
    );
}
