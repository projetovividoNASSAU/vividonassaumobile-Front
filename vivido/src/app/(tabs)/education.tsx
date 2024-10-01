import { View, Text, FlatList } from 'react-native';
import { Article } from '../../components/Article';
import Header from '../../components/Header';
import { articleData } from '../../mocks/mock-articles-data';

export default function EducationTab() {
  return (
    <>
      <Header 
        titleHeader='Artigos'
        subtitleHeader='Leia mais sobre o assunto'
      />
      <View className='flex-1 w-full justify-center items-center bg-white'>
        <FlatList 
          contentContainerStyle={{width: '100%', display: "flex", justifyContent:"center", alignItems: "center"}}
          data={articleData}
          renderItem={({item}) => (
            <Article
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
            />
          )}
        />
        {/* <Article/> */}
      </View>
    </>
  );
}

