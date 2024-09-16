import { View, Text, Pressable } from "react-native";
import { HeaderProps } from "./header";
import { useRouter } from "expo-router";

export default function Header({titleHeader, subtitleHeader}: HeaderProps) {
    const router = useRouter()
    return (
        <View className="w-full bg-white p-4 h-28 flex-row pt-16 justify-between items-center">
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
            <Pressable onPress={() => router.push('/profile')} className="h-14 w-14 bg-slate-600 rounded-full"></Pressable>
        </View>
    )
};
