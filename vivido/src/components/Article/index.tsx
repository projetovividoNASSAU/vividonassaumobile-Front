import { View, Image, Text, TouchableOpacity } from "react-native";

interface ArticleProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const imageMap: { [key: string]: any } = {
    "images (1).jpeg": require('../../../assets/images (1).jpeg'),
    "download.jpeg": require('../../../assets/download.jpeg'),
    "images.jpeg": require('../../../assets/images.jpeg'),
    "images.png": require('../../../assets/images.png'),
    "images1.jpeg": require('../../../assets/images1.jpeg'),
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
