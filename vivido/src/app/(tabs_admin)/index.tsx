import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { ButtonDefault } from '../../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from 'react';
import useGetCallsQuery from '../../hooks/queries/useGetCallsQuery';
import { AuthContext } from '../../contexts/AuthContext';
import { Call } from '../../components/Call';
import { useRouter } from 'expo-router';
import Category from '../../components/CategoryTab';

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
      <View className='bg-white w-screen flex-1 justify-start gap-6 items-center'>
        <View className='w-[90%] mx-6'>
          <Text className='text-start font-bold text-2xl text-grayprimary'>Chamados recentes</Text>
        </View>
        <View className='w-[100%]'>
          <View className='w-[90%] mx-6 my-4 flex flex-row justify-between'>
            <Category name='Recentes'/>
            <Category name='Resolvidos'/>
            <Category name='Pendente'/>
          </View>
          <View className='w-full flex items-center justify-center my-5'>
            <TouchableOpacity
              className="w-[90%] items-center"
              onPress={() => router.push({
                pathname: '/call_detail_admin/[data]',
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
