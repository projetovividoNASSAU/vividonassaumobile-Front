import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefault } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputArea, InputDefault } from "../../components/Input";
import { useCreateGuardianForm } from "../../hooks/useCreateGuardianForm";
import { Select } from "../../components/Select";
import { useState } from "react";

const data = [
  { key: '1', value: 'CPJ' },
  { key: '2', value: 'PSICOLOGIA' },
];

export default function RegisterCall() {
  // Definir o tipo do selectedValue como string | number
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const { Controller, control, handleOnSubmit } = useCreateGuardianForm();

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
                    name="name"
                    render={({ field: { onChange } }) => (
                      <InputDefault placeholder="Relate um titulo da causa ..." />
                    )}
                  />
                </View>

                {/* Select corrigido */}
                <Select
                  label="Institutos"
                  options={data}
                  onSelect={(value) => setSelectedValue(value)}  // Garantir que o valor seja passado corretamente
                  selectedValue={selectedValue}
                  labelKey="value"  // Corrigido para mapear o valor
                  valueKey="key"    // Corrigido para mapear a chave
                />
              </View>
              <View className="w-full flex flex-col items-center">
                <View className="w-full">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange } }) => (
                      <InputArea placeholder="Detalhes da causa ..." />
                    )}
                  />
                </View>
              </View>
            </View>
            <ButtonDefault to="/register">
              <ButtonDefault.Text>Abrir Chamado</ButtonDefault.Text>
            </ButtonDefault>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
