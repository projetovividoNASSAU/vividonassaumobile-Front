import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";

export default function NewDetails() {
    const { data } = useLocalSearchParams();
    const info = typeof data === 'string' ? JSON.parse(data) : null;
    console.log(info);

    return (
        <>
            <Header 
                titleHeader="Artigos"
                subtitleHeader={(<BackPage/>)}
            />
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-start', padding: 20 }} 
            >
                <BackPage />
                <View className="w-full flex gap-3 py-4">
                    <Text className="text-grayprimary font-subtitle text-xl font-semibold">
                        {info.title}
                    </Text>
                    <Image 
                        className='w-full h-52 rounded-md my-6' 
                        source={require('../../../assets/violencia-escolar.webp')} 
                        style={{ opacity: 1 }} 
                    />
                    
                    <Text className="text-justify text-base leading-relaxed w-full">
                        {info.description}
                    </Text>
                </View>
            </ScrollView>
        </>
    );
}
