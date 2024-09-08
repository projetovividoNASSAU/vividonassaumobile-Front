import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonSecundary } from '../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
export default function App() {
    return (
        <View className="flex-1 justify-evenly items-center">
            <View className='flex flex-col gap-10 pt-24 items-center' >
                <View className='h-44 w-56 '>
                    <Image 
                        className='bg-cover w-full h-full'
                        source={require('../../assets/Frame 85 (1).png')}
                    />
                </View>
                <Text className='text-redcherry font-bold text-2xl font-subtitle'>Permita-se ser ajudado</Text>
            </View>
            <View className='w-[80%] flex flex-col gap-10'>
                        <Button to='/login'>
                            <Button.Text>
                                Entrar 
                            </Button.Text>
                            <Button.Icon>
                            <AntDesign name="right" size={20} color="white" />
                            </Button.Icon>
                        </Button>
                <ButtonSecundary to={'/register'}>
                    <ButtonSecundary.TextSecudary>
                        Registrar-se 
                    </ButtonSecundary.TextSecudary>
                </ButtonSecundary>
            </View>
            <View className='h-32 w-32'>
                <Image 
                    className='bg-cover w-full h-full'
                    source={require('../../assets/uninassau_share.png')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

