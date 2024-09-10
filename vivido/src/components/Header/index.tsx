import { View, Text } from "react-native";
import { HeaderProps } from "./header";

export default function Header({titleHeader, subtitleHeader}: HeaderProps) {
    return (
        <View className="w-full bg-white p-4 h-28 flex-row pt-8 justify-between items-center">
            <View>
                <Text className="font-title text-grayprimary text-xl">
                    {titleHeader}
                </Text>
                {
                    subtitleHeader && (
                        <Text className="font-normal text-grayprimary text-lg">
                            {subtitleHeader}
                        </Text>
                    )
                }
            </View>
            <View className="h-14 w-14 bg-slate-600 rounded-full"></View>
        </View>
    )
};
