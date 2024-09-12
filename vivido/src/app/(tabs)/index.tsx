import { View,Text} from 'react-native';
import Header from '../../components/Header';
import Outdor from '../../components/Outdor';
import { ButtonTab } from '../../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Content from '../../components/Content';

export default function HomeTab() {
  return (
    <>
        <Header titleHeader={"Bem vindo(a), Bruna!"}/>
        <View className='bg-white w-screen flex-1 justify-between items-center'>
          <View className='w-[90%] my-3'>
            <Text className='text-start font-bold text-2xl text-grayprimary'>Principais tópicos do dia</Text>
          </View>
          <Outdor
            data='10/03/2024'
            title='Titulo do artigo para teste'
            description='Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of
            classical Latin literature from 45 BC...'
          />
          <View className='flex flex-row w-[90%] mx-10 items-center justify-between my-10'>
            <ButtonTab to='/'>
              <ButtonTab.ButtonIconTab>
                  <AntDesign name="heart" size={24} color="white" />
              </ButtonTab.ButtonIconTab>
              <ButtonTab.ButtonTextTab>
                Gurdiões
              </ButtonTab.ButtonTextTab>
            </ButtonTab>
            <ButtonTab to='/'>
              <ButtonTab.ButtonIconTab>
                <MaterialCommunityIcons name="message-text-clock" size={24} color="white" />
              </ButtonTab.ButtonIconTab>
              <ButtonTab.ButtonTextTab>
                Chamados
              </ButtonTab.ButtonTextTab>
            </ButtonTab>
          </View>
          <View className='w-[90%]'>
            <Text className='text-start font-bold text-2xl text-grayprimary'>Últimos Chamados</Text>
          </View>
          <View className='w-[90%]'>
            <Content />
          </View>
        </View>
    </>
  )
}
