import { Text } from "react-native";
import { LegandProps } from "./legand";

export default function Legand({textPrimary, textSecundary}: LegandProps) {
    return <Text className="text-center font-primary text-grayprimary">{textPrimary}<Text className="font-subtitle text-redcherry">{textSecundary}</Text></Text>
}
