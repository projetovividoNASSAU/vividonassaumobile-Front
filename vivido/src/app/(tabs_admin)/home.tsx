import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useContext } from 'react';
import useGetCallsQuery from '../../hooks/queries/useGetCallsQuery';
import { AuthContext } from '../../contexts/AuthContext';
import { useRouter } from 'expo-router';
import { Call } from '../../components/Call';

export default function HomeTab() {
    const { token } = useContext(AuthContext);
    const { data } = useGetCallsQuery(token);
    const router = useRouter()

    if (!data) {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Carregando...</Text>
        </View>
    );
    }

    return (
    <>
        <Header titleHeader={"Chamados em aberto"} subtitleHeader='Escolha uma causa de sua prefênicia, inicie!' />
        <View className='bg-white w-screen flex-1 justify-between items-center'>
            {/* <View className='w-[90%] my-1'>
                <Text className='text-start font-bold text-2xl text-grayprimary'>Todos os chamados: </Text>
            </View> */}
            <View className="flex-1 items-start mb-5">
        <View className="w-full flex-1 items-center justify-center ">
            <FlatList
            data={data}
            contentContainerStyle={{
                alignItems: 'center',
                width: '100%',        
            }}
            renderItem={({ item }) => (
                <TouchableOpacity
                className="w-[90%] mb-4"  
                onPress={() =>
                    router.push({
                    pathname: "/call_detail_admin/[data]",
                    params: { data: JSON.stringify(item) },
                    })
                }
                >
                <Call
                    title={item.title}
                    description={item.decricao}
                    createdAt={item.time}
                    type={item.type}
                    status={true}
                />
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
        </View>
        </View>
        </View>
    </>
    );
}
