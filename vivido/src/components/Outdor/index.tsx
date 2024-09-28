import { TouchableOpacity, View, Text, Image } from "react-native";
import { OurtdorProps } from "./outdor";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { newsData } from "../../mocks/mock-news-data";

export default function Outdor({ title }: OurtdorProps) {
  const new_main = newsData[0];
  const router = useRouter();

  return (
    <TouchableOpacity 
      onPress={() => router.push({
        pathname: '/new_detail/[data]',
        params: { data: JSON.stringify(new_main) }
      })}
      className='relative bg-white w-[90%] h-56 rounded-md shadow-md shadow-gray-500'
    >
      <Image 
        className='absolute inset-0 w-full h-full rounded-md' 
        source={require('../../../assets/violencia-escolar.webp')} 
        style={{ opacity: 1 }} 
      />
      
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']} 
        className='absolute inset-0 rounded-md'
      />  
      
      <View className='relative h-full flex flex-col gap-3 justify-end py-5 items-center'>
        <Text className='text-white font-title text-2xl text-start leading-none'>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
