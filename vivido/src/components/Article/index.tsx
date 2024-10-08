    import { View, Image, Text, TouchableOpacity } from "react-native";

    interface ArticleProps {
        title: string;
        subtitle: string;
        imageUrl: string;
    }

    const imageMap: { [key: string]: any } = {
        "images3.jpeg": require('../../../assets/images3.jpeg'),
        "download.jpeg": require('../../../assets/download.jpeg'),
        "images0.jpeg": require('../../../assets/images0.jpeg'),
        "images1.png": require('../../../assets/images1.png'),
        "images2.jpeg": require('../../../assets/images2.jpeg'),
    };

    export function Article({ title, subtitle, imageUrl }: ArticleProps) {
        return (
            <TouchableOpacity className="w-full py-8 border-t border-slate-400">
                <View className="w-full flex flex-row justify-start items-center gap-4">
                    <View className="h-8 w-8 rounded-full">
                        <Image
                            source={require('../../../assets/defaultimg.jpg')}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-full shadow-md shadow-slate-500"
                        />
                    </View>
                    <Text>Alexsander Nguyer</Text>
                </View>
                <View className="w-full flex flex-row justify-start items-center gap-4 ">
                    <View className="w-[60%]">
                        <Text className="text-2xl font-semibold">{title}</Text>
                        <Text>{subtitle}</Text>
                    </View>
                    <View className="h-32 w-32 rounded-md">
                        <Image
                            source={imageMap[imageUrl]}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-md shadow-md shadow-slate-500"
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
