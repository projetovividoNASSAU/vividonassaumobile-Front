import { View, TouchableOpacity, Text, FlatList } from "react-native";
import Header from "../../components/Header";
import BackPage from "../../components/BackPage";
import { ButtonDefault } from "../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Call } from "../../components/Call";
import useGetCallsQuery from "../../hooks/queries/useGetCallsQuery";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "expo-router";
export default function Calls() {
  const {token} = useContext(AuthContext)
  const {data} = useGetCallsQuery(token)


  return (
    <>
      <Header
        titleHeader="Chamados"
        subtitleHeader=" Acompanhe o progresso de seus chamados"
      />
      <View className="flex-1 items-start mx-4 mb-5">
        <BackPage />
        <View className="flex-1  w-full items-center justify-between">
          <FlatList
            data={data}
            renderItem={({item})=> (
              <Link
                className="!w-[100%]"
                href={{
                  pathname: '/call_detail/[data]',
                  params: {data: JSON.stringify(item)}
                }}
              >
                <Call
                  title={item.title}
                  description={item.decricao}
                  createdAt={item.time}
                  type={item.type}
                  status={true}
                />
              </Link>
            )}
          />
          <ButtonDefault to={"/register_call"}>
            <ButtonDefault.Icon>
              <AntDesign name="plus" size={24} color="white" />
            </ButtonDefault.Icon>
            <ButtonDefault.Text>Novo Chamado</ButtonDefault.Text>
          </ButtonDefault>
        </View>
      </View>
    </>
  );
}
