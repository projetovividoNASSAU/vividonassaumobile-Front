import { View, Text, Image } from "react-native";
import Header from "../../components/Header";
import { ButtonOpenNewCall, ButtonPanic } from "../../components/Button";
import Foundation from '@expo/vector-icons/Foundation';
import ModalOptions from "../../components/Modal";
import { useState } from "react";

export default function PanicTab() {
  const [isVisibled, setIsVisibled] = useState(false);

  

  return (
    <>
      <Header
        titleHeader="Acionamento"
        subtitleHeader="Em caso de acionamento, não se cale."
      />
      
      <ModalOptions 
        isVisibled={isVisibled} 
        setIsVisibled={setIsVisibled}
      />
      <View className="flex-1 bg-white items-center justify-center">
        <View className="w-[70%] flex flex-col items-center gap-6">
          <View className="bg-slate-300 w-36 h-36 rounded-full ">
            <Image
                source={require('../../../assets/falar.png')}
                style={{ height: '100%', width: '100%', transform: [{ scaleX: -1 }] }}
                className="rounded-full shadow-md shadow-slate-500"
            />
          </View>
          <View>
            <Text className="font-subtitle text-grayprimary text-center text-2xl">
              Não se cale, denuncie!
            </Text>
            <Text className="text-center text-grayprimary">
              Contate os seus guardiões e órgãos do governo, permita-se ser ajudado.
            </Text>
          </View>
          <View className="w-full ">
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

      <View className="w-full bg-white flex flex-row justify-center">
          <View className="w-[90%] mx-2 border-t py-6 border-slate-400">
            <Text className="text-center text-lg leading-tight py-4">
              Obtenha suporte de uma equipe especializada, voltada a psicologia e ao jurídico!
            </Text>
            <ButtonOpenNewCall to={"/register_call"}>
              <ButtonOpenNewCall.Text>
                Abrir novo chamado {'>'}
              </ButtonOpenNewCall.Text>
            </ButtonOpenNewCall>
          </View>
      </View>
    </>
  );
}
