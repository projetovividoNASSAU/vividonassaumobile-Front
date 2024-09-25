import { View, Text } from "react-native";
import Header from "../../components/Header";
import { ButtonOpenNewCall, ButtonPanic } from "../../components/Button";
import Foundation from '@expo/vector-icons/Foundation';
import ModalOptions from "../../components/Modal";
import { useState } from "react";

export default function PanicTab() {
  const [isVisibled, setIsVisibled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header
        titleHeader="Acionamento"
        subtitleHeader="Em caso de acionamento, não se desespere"
      />
      
      <ModalOptions 
        isVisibled={isVisibled} 
        setIsVisibled={setIsVisibled}
        isActive={isActive} 
        setIsActive={setIsActive}
      />

      <View className="flex-1 bg-white items-center justify-center">
        <View className="w-[70%] flex flex-col items-center gap-6">
          <View className="bg-slate-300 w-32 h-32 rounded-full"></View>
          <View>
            <Text className="font-subtitle text-grayprimary text-center text-lg">
              Não se cale, denuncie!
            </Text>
            <Text className="text-center text-grayprimary">
              Contate os seus guardiões e órgãos do governo, permita-se ser ajudado.
            </Text>
          </View>
          <View className="w-full">
            <ButtonPanic to="" onPress={() => setIsVisibled(true)}>
              <ButtonPanic.Icon>
                <Foundation name="alert" size={24} color="white" />
              </ButtonPanic.Icon>
              <ButtonPanic.Text>
                Pânico
              </ButtonPanic.Text>
            </ButtonPanic>
          </View>
        </View>
      </View>

      <ButtonOpenNewCall to={"/register_call"}>
        <ButtonOpenNewCall.Text>
          Abrir novo chamado {'+'}
        </ButtonOpenNewCall.Text>
      </ButtonOpenNewCall>
    </>
  );
}
