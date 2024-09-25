import { View, Image, Text } from "react-native";
import { TemplateLogoProps } from "./template_logo";

export default function TemplateLogo({legend}:TemplateLogoProps) {
    return (
        <View className='flex flex-col gap-10 pt-24 items-center pb-4' >
            <View className='h-44 w-56 '>
                <Image 
                    className='bg-cover w-full h-full'
                    source={require('../../../assets/Frame 85 (1).png')}
                />
            </View>
            <Text className='text-redcherry font-bold text-2xl font-subtitle'>{legend}</Text>
        </View>
    )
};
