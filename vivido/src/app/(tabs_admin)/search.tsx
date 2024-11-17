import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { ButtonDefault } from '../../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from 'react';
import useGetCallsQuery from '../../hooks/queries/useGetCallsQuery';
import { AuthContext } from '../../contexts/AuthContext';
import { Call } from '../../components/Call';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeTab() {
  const { token, me } = useContext(AuthContext);
  const { data } = useGetCallsQuery(token);
  const router = useRouter();


  const calls = Array.isArray(data) ? data : [];
  const recentCall = calls
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())[0];

  if (!data) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <>
      <Header titleHeader={"Bem vindo(a) ao Vivido"} subtitleHeader={me?.login} />
      <View className='bg-white w-screen flex-1 justify-start gap-8 items-center'>
      <View className='w-full px-4'>
          <TextInput
            className={`bg-slate-100 w-[100%]  p-4 text-lg rounded-2xl`}
            placeholder={"Busque por um chamado ..."}
          />
      </View>

        <View className='w-[100%] my-1'>
          <View className='w-[90%] mx-7'>
              <Text className='text-start font-bold text-xl text-grayprimary'>Encontrados(2)</Text>
          </View>
          <View className='w-full flex items-center justify-center my-5'>
            <TouchableOpacity
              className="w-[90%] items-center"
              onPress={() => router.push({
                pathname: '/call_detail/[data]',
                params: { data: JSON.stringify(recentCall) }
              })}
            >
              {
                recentCall?(
                  <Call
                    title={recentCall.title}
                    description={recentCall.decricao}
                    createdAt={''}
                    type={''}
                  />
                ): (
                <View className="w-full mx-10 py-4 items-center justify-center">
                  <Text className='py-5'>Você ainda não possui solictações em aberto...</Text>
                  <ButtonDefault to={"/register_call"}>
                    <ButtonDefault.Icon>
                      <AntDesign name="plus" size={24} color="white" />
                    </ButtonDefault.Icon>
                    <ButtonDefault.Text>Novo Chamado</ButtonDefault.Text>
                  </ButtonDefault>
                </View>
                )
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
