import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefault, ButtonDefaultReq } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputArea, InputDefault } from "../../components/Input";
import { useCreateGuardianForm } from "../../hooks/useCreateGuardianForm";
import { useState } from "react";
import useCreateCallForm from "../../hooks/useCreateCallForm";

const data = [
  { key: '1', value: 'CPJ' },
  { key: '2', value: 'PSICOLOGIA' },
];

export default function RegisterCall() {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const { Controller, control, handleOnSubmit, handleSubmit,isLoading } = useCreateCallForm();

  return (
    <>
      <Header
        titleHeader="Abrir Chamado"
        subtitleHeader="Informe os dados necessários da causa"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 items-start mx-4 mb-10">
          <BackPage />
          <View className="flex-1  w-full items-center justify-between">
            <View className="flex-1 w-full items-center border-t-2 border-gray-300 py-5 gap-10 justify-start">
              <View className="w-full flex flex-col items-center">
                <View className="w-full">
                  <Text className="font-subtitle text-sm pb-2">Título da causa:</Text>
                  <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange } }) => (
                      <InputDefault placeholder="Relate um titulo da causa ..." onChangeText={onChange} />
                    )}
                  />
                </View>
                <View className="w-full mt-2">
                  <Text className="font-subtitle text-sm pb-2">Orgãos:</Text>
                  <Controller
                    control={control}
                    name="type"
                    render={({ field: { onChange } }) => (
                      <InputDefault placeholder="Relate um titulo da causa ..." onChangeText={onChange} />
                    )}
                  />
                </View>
              </View>
              <View className="w-full flex flex-col items-center">
                <View className="w-full">
                  <Controller
                    control={control}
                    name="descricao"
                    render={({ field: { onChange } }) => (
                      <InputArea placeholder="Detalhes da causa ..." onChangeText={onChange} />
                    )}
                  />
                </View>
              </View>
            </View>
            <ButtonDefaultReq 
                onPress={handleSubmit(handleOnSubmit)} 
                disabled={isLoading}>
                <ButtonDefaultReq.Text>
                  {isLoading ? 'Chamado em andamento...' : 'Abrir chamado'}
                </ButtonDefaultReq.Text>
            </ButtonDefaultReq>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
