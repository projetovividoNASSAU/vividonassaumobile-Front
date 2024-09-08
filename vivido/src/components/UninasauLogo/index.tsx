import { View,Image } from "react-native";

export default function Uninassau() {
    return( 
        <View className='h-32 w-32 pt-10'>
            <Image 
                className='bg-cover w-full h-full'
                source={require('../../../assets/uninassau_share.png')}
            />
        </View>
    )
};
