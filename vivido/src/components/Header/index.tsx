import { View, Text, Pressable, Image } from "react-native";
import { HeaderProps } from "./header";
import { useRouter } from "expo-router";

export default function Header({titleHeader, subtitleHeader}: HeaderProps) {
    const router = useRouter()
    return (
        <View className="w-full bg-white p-4 h-32 flex-row pt-16 justify-center items-center ">
            <View className="w-full mx-5 flex-row justify-between  border-b border-slate-400 pb-7">
                <View >
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
                <Pressable onPress={() => router.push('/profile')} className="h-14 w-14 rounded-full">
                    <Image
                        source={require('../../../assets/defaultimg.jpg')} 
                        style={{ height: '100%', width: '100%'}}
                        className="rounded-full shadow-md shadow-slate-500"
                    />
                </Pressable>
            </View>
        </View>
    )
};
