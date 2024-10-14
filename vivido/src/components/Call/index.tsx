import dayjs from "dayjs";
import { View, Text } from "react-native";

interface CallProps {
  title: string;
  description: string;
  status?: boolean;
  createdAt: string;
  type: string;
}

export function formatData (dateString:string) {
  const formattedData = dayjs(dateString).format("DD/MM/YY")
  return formattedData
}

export function Call({ title, description, status, type, createdAt }: CallProps) {
  return (
    <View className="w-[100%] ">
      <View className="flex flex-col gap-4 w-full items-start justify-between border border-slate-200 rounded-lg p-4">
        <Text className="font-subtitle text-lg">{title}</Text>

        <View className="flex flex-row items-center gap-4 w-full">
          <Text className="bg-blue-100 text-center rounded-full px-4">NPJ</Text>
          <Text className="bg-blue-100 text-center rounded-full px-4">Psicologia</Text>
        </View>

        <Text className="text-justify max-w-full">{description}</Text>
        <View className="flex flex-row justify-between w-full">
          <Text>Postada: {formatData(createdAt)}</Text>
          <Text className="bg-yellow-400 text-center rounded-full px-5">
            Chamada {status ? "Ativa" : "Pendente"}
          </Text>
        </View>
      </View>
    </View>
  );
}
