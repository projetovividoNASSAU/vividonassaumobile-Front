import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ButtonDefault } from "../../components/Button";
import BackPage from "../../components/BackPage";
import Header from "../../components/Header";
import { InputArea, InputDefault } from "../../components/Input";
import useRegisterGuardianForm from "../../hooks/useRegisterGuardianForm";

export default function RegisterCall() {
    const { Controller, control, handleOnSubmit, handleSubmit } =
    useRegisterGuardianForm();
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
              </View>
              <View className="w-full flex flex-col items-center">
                <View className="w-full">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange } }) => (
                      <InputArea placeholder="Detalhes a causa ..." />
                    )}
                  />
                </View>
              </View>
            </View>
            <ButtonDefault to={"/registerguardians"}>
              <ButtonDefault.Text>Abrir Chamado</ButtonDefault.Text>
            </ButtonDefault>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
