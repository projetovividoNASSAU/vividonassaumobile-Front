import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../../components/Header';
import { ButtonDefault } from '../../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext, useState } from 'react';
import useGetCallsQuery from '../../hooks/queries/useGetCallsQuery';
import { AuthContext } from '../../contexts/AuthContext';
import { Call } from '../../components/Call';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import useGetCallsAdmQuerie from '../../hooks/queries/useGetCallsAdmQuerie';
import { CallAdm } from '../../components/CallsAdm';

export default function HomeTab() {
  const { token, me } = useContext(AuthContext);
  const { data } = useGetCallsAdmQuerie(token);
  const [inputValue, setInputValue] = useState("")
  const router = useRouter();

  console.log(data)
  const serchCall = data.filter((call:any) =>
    call.title.toLocaleUpperCase().includes(inputValue.toLocaleUpperCase())
  );  


  return (
    <>
      <Header titleHeader={"Bem vindo(a) ao Vivido"} subtitleHeader={me?.login} />
      <View className='bg-white w-screen flex-1 justify-start gap-8 items-center'>
      <View className='w-full px-4'>
          <TextInput
            onChangeText={setInputValue}
            className={`bg-slate-100 w-[100%]  p-4 text-lg rounded-2xl`}
            placeholder={"Busque por um chamado ..."}
          />
      </View>
        <View className='w-[100%] my-1'>
          <View className='w-[90%] mx-7'>
              <Text className='text-start font-bold text-xl text-grayprimary'>Encontrados</Text>
          </View>
          <View className='w-full h-[82%] flex items-center justify-center my-5'>
            <FlatList
              data={serchCall}
              contentContainerStyle={{
                width: '100%',   
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
                      callback={item?.calback}
                      nameFun={item?.nameFun}
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
