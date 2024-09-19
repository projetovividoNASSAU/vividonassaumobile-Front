import { Text } from "react-native";
import { LegandProps } from "./legand";
import { useRouter } from "expo-router";

export default function Legand({textPrimary, to, textSecundary}: LegandProps) {
    const router = useRouter()
    return <Text onPress={() => router.push(to)} className="text-center font-primary text-grayprimary">{textPrimary}<Text className="font-subtitle text-redcherry">{textSecundary}</Text></Text>
}
