import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Outdor from '../../components/Outdor';
import { ButtonTab } from '../../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import useGetCallsQuery from '../../hooks/queries/useGetCallsQuery';
import { AuthContext } from '../../contexts/AuthContext';
import { Call } from '../../components/Call';
import { useRouter } from 'expo-router';

export default function HomeTab() {
  const { token } = useContext(AuthContext);
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
      <Header titleHeader={"Bem vindo(a), Bruna!"} />
      <View className='bg-white w-screen flex-1 justify-between items-center'>
        <View className='w-[90%] my-1'>
          <Text className='text-start font-bold text-2xl text-grayprimary'>Principais tópicos do dia</Text>
        </View>
        <Outdor
          data='10-03-2024'
          title='A Violência contra a mulher não pode...'
          description='Afirmar que a violência contra a mulher não deve ser tolerada soa simples e óbvio. Na verdade, em pleno século 21 parece mesmo ser esta uma afirmação...'
        />
        <View className='flex flex-row w-[90%] mx-10 items-center justify-between my-10'>
          <ButtonTab to='/guardian'>
            <ButtonTab.ButtonIconTab>
              <AntDesign name="heart" size={24} color="white" />
            </ButtonTab.ButtonIconTab>
            <ButtonTab.ButtonTextTab>Gurdiões</ButtonTab.ButtonTextTab>
          </ButtonTab>
          <ButtonTab to='/calls'>
            <ButtonTab.ButtonIconTab>
              <MaterialCommunityIcons name="message-text-clock" size={24} color="white" />
            </ButtonTab.ButtonIconTab>
            <ButtonTab.ButtonTextTab>Chamados</ButtonTab.ButtonTextTab>
          </ButtonTab>
        </View>

        <View className='w-[100%] my-1'>
          <View className='w-[100%] mx-6  '>
            <Text className='text-start font-bold text-2xl text-grayprimary'>Últimos Chamados</Text>
          </View>

          <View className='w-full flex items-center justify-center my-5'>
            <TouchableOpacity
              className="w-[90%] items-center"
              onPress={() => router.push({
                pathname: '/call_detail/[data]',
                params: { data: JSON.stringify(recentCall) }
              })}
            >
              <Call
                title={recentCall.title}
                description={recentCall.decricao}
                createdAt={''}
                type={''}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
