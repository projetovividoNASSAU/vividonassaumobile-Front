import dayjs from "dayjs";
import { View, Text } from "react-native";

interface CallProps {
  user: string
  title: string;
  description: string;
  status?: string;
  createdAt: string;
  type: string;
  nameFun: string;
  callback:string
}

export function formatData (dateString:string) {
  const formattedData = dayjs(dateString).format("DD/MM/YY")
  return formattedData
}

export function Call({ title, description, status, type, createdAt, nameFun,callback, user }: CallProps) {
  console.log("teste",callback)
  return (
    <View className="w-[100%] ">
      <View className="flex flex-col gap-4 w-full items-start justify-between border border-slate-200 rounded-lg p-4">
        <Text className="font-subtitle text-lg">{title.slice(0, 40)}...</Text>

        <View className="flex flex-row items-center gap-4 w-full">
              <Text>
                {user}
              </Text>
            </View>

        <Text className="text-justify max-w-full">{description.slice(0, 40)}...</Text>
        <View className="flex flex-row justify-between w-full">
          <Text>Postada: {formatData(createdAt)}</Text>
          <Text className={`bg-yellow-400 ${callback === "Aguardando atualizações" ? "!bg-redcherry text-white" : "!bg-grayprimary text-white"} text-center rounded-full px-5`}>
            Chamada {callback !== "Aguardando atualizações"  ? "fechada" : "aberta"}
          </Text>
        </View>
      </View>
    </View>
  );
}
