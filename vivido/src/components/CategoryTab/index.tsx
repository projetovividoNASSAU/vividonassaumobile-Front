import { TouchableOpacity, View, Text, TouchableOpacityProps } from "react-native";
import { CategoryProps } from "./category";

export default function Category({name, ...rest}: CategoryProps & TouchableOpacityProps) {
    return (
        <>
            <TouchableOpacity
                {...rest}
            >
                <View className='bg-redcherry py-2 px-8 max-w-fit rounded-full'>
                    <Text className='text-white font-bold text-sm max-w-fit'>{name}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
};
