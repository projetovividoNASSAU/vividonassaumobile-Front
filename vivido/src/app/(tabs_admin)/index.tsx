import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '../../components/Header';
import { useContext, useState } from 'react';
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

  const [buttonTab, setButtonTab] =  useState("recentes")



  console.log(data)
  const calladm = Array.isArray(data)? data :[]

  const current = calladm.filter((call:any) =>
    call?.callback === "Aguardando atualizações"
  );  

  const resolve = calladm.filter((call:any) =>
    call?.callback !== "Aguardando atualizações"
  );  

  const request = calladm.filter((call:any) =>
    call.nameFun === me?.name
  );  

  console.log("recentes", current)
  console.log("resolvidos", resolve)
  console.log("solicitados por mim", request)


  return (
    <>
      <Header titleHeader={"Bem vindo(a) ao Vivido"} subtitleHeader={me?.login} />
      <View className='bg-white w-screen flex-1 justify-start gap-6 items-center'>
        <View className='w-[90%] mx-6'>
          <Text className='text-start font-bold text-2xl text-grayprimary'>Chamados recentes</Text>
        </View>
        <View className='w-[100%]'>
          <View className='w-[90%] mx-6 my-4 flex flex-row justify-between'>
            <Category name='Recentes' onPress={()=> setButtonTab("recentes")}/>
            <Category name='Resolvidos' onPress={()=> setButtonTab("resolvidos")}/>
            <Category name='Solicitados' onPress={()=> setButtonTab("solicitados")}/>
          </View>
          <View className='w-full h-[82%] flex items-center justify-center my-5'>
            {
              buttonTab === "recentes" && (
                <FlatList
                data={current}
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
                        callback={item.callback}
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
              )
            }
            {
              buttonTab === "resolvidos" && (
                <FlatList
                data={resolve}
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
                        callback={item.callback}
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
              )
            }
            {
              buttonTab === "solicitados" && (
                <FlatList
                data={request}
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
                        callback={item.callback}
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
              )
            }
          </View>
        </View>
      </View>
    </>
  );
}
