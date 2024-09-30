import { useRouter } from "expo-router";
import { View,Image, TouchableOpacity } from "react-native";

export default function Uninassau() {
    const router = useRouter()
    return( 
        <TouchableOpacity onPress={() => router.push('/')} className='h-32 w-32 mt-14'>
            <Image 
                className='bg-cover w-full h-full'
                source={require('../../../assets/uninassau_share.png')}
            />
        </TouchableOpacity>
    )
};
