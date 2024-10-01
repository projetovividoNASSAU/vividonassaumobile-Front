import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoIframe from '../../components/Video';
import { videoData } from '../../mocks/mock-videos-data';
import Header from '../../components/Header';

export default function StreamTab() {
  return (
    <>
      <Header
        titleHeader='Videos Educativos'
        subtitleHeader='navegue nos conteúdos e entenda!'
      />
      <View className='flex-1 items-center justify-center bg-white px-2'>
        <FlatList 
          data={videoData}
          renderItem={({item}) => <VideoIframe videoId={item.videoId}/>}
        />
      </View>
    </>
  );
}

