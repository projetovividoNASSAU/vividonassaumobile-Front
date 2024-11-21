import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '../../components/Header';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Category from '../../components/CategoryTab';
import useGetCallsAdmQuerie from '../../hooks/queries/useGetCallsAdmQuerie';
import { Call } from '../../components/Call';
import { useRouter } from 'expo-router';
import { CallAdm } from '../../components/CallsAdm';

export default function HomeTab() {
  const { token, me } = useContext(AuthContext);
  const { data } = useGetCallsAdmQuerie(token);
  const router = useRouter();

  console.log(data)
  const calladm = Array.isArray(data)? data :[]

  // const recentCall = calls
  //   .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())[0];

  // if (!data) {
  //   return (
  //     <View className='flex-1 items-center justify-center'>
  //       <Text>Carregando...</Text>
  //     </View>
  //   );
  // }

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
          <View className='w-full h-[82%] flex items-center justify-center my-5'>
            <FlatList
              data={calladm}
              contentContainerStyle={{
                width: '100%',   
                // height: '100%',     
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                key={item.id}
                  className="w-[100%] items-center"
                  onPress={() => router.push({
                    pathname: '/call_detail_admin/[data]',
                    params: { data: JSON.stringify(item) }
                  })}
                >
                  <CallAdm
                      nameFun={item.nameFun}
                      user={item.name}
                      title={item.title}
                      description={item.decricao}
                      createdAt={item.time}
                      type={item.type}
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
