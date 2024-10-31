import { View, TouchableOpacity, Text, FlatList } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { ButtonDefault } from "../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Call } from "../../components/Call";
import useGetCallsQuery from "../../hooks/queries/useGetCallsQuery";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function Calls() {
  const { token } = useContext(AuthContext);
  const { data } = useGetCallsQuery(token);
  const router = useRouter();

  return (
    <>
      <Header
        titleHeader="Chamados"
        subtitleHeader={(<BackPage 
          to="/(tabs)/"
        />)}
      />
      <View className="flex-1 items-start mb-5 px-4">
        <Text className=" text-gray-500 pt-2 pb-6">Chamados registrados: {data?.length}.</Text>
        <View className="w-full flex-1 items-center justify-center ">
          <FlatList
            data={data}
            contentContainerStyle={{
              width: '100%',        
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="w-[100%] mb-4"  
                onPress={() =>
                  router.push({
                    pathname: "/call_detail/[data]",
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

        
          <View className="w-[90%] mx-10 items-center justify-center">
            <ButtonDefault to={"/register_call"}>
              <ButtonDefault.Icon>
                <AntDesign name="plus" size={24} color="white" />
              </ButtonDefault.Icon>
              <ButtonDefault.Text>Novo Chamado</ButtonDefault.Text>
            </ButtonDefault>
          </View>
        </View>
      </View>
    </>
  );
}
