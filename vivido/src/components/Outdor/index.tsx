import { TouchableOpacity,View, Text, Image } from "react-native";
import { OurtdorProps } from "./outdor";

export default function Outdor({data,description,title}: OurtdorProps) {
    return(
        <TouchableOpacity className='bg-slate-100 w-[90%] h-56 flex flex-row justify-center gap-3 items-center rounded-md'>
        <View className='w-[90%] flex flex-col gap-3'>
          <View className='flex flex-row gap-5'>
            <View className='h-24 w-32'>
              <Image className='w-[100%] h-[100%] rounded-sm' source={require('../../../assets/violencia-escolar.webp')}/>
            </View>
            <View className='h-full w-[70%]'>
              <Text className='text-end '>
                {data}
              </Text>
              <Text className='font-title text-2xl text-grayprimary w-[100%]'>
                {title}
              </Text>
            </View>
          </View>
          <View className='w-full'>
            <Text>
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
};
