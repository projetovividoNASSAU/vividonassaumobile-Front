import dayjs from "dayjs";
import { View, Text } from "react-native";

interface CallProps {
    user: string
    title: string;
    description: string;
    status?: string;
    createdAt: string;
    type: string;
    nameFun: string
}

export function formatData (dateString:string) {
    const formattedData = dayjs(dateString).format("DD/MM/YY")
    return formattedData
}

export function CallAdm({ title, description, status, type, createdAt, nameFun, user }: CallProps) {
    return (
        <View className="w-[95%] ">
        <View className="flex flex-col gap-4 w-full items-start justify-between border border-slate-200 rounded-lg p-4">
            <View>
                <Text className="font-subtitle text-lg">{title}</Text>
                <Text>
                    {user}
                </Text>
            </View>
            <View className="flex flex-row items-center gap-4 w-full">
                <View className="w-[100%] flex flex-row gap-2 justify-start ">
                    <Text className="bg-yellow-400 text-center rounded-full px-6">{nameFun}</Text>
                </View>
            </View>

            <Text className="text-justify max-w-full">{description}</Text>
            <View className="flex flex-row justify-between w-full">
            <Text>Postada: {formatData(createdAt)}</Text>
            <Text className="bg-blue-100 text-center rounded-full px-10">{type}</Text>
            </View>
        </View>
        </View>
    );
}
