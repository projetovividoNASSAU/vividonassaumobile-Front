import { View, Text, StyleSheet } from 'react-native';
import VideoIframe from '../../components/Video';

export default function StreamTab() {
  return (
    <View style={styles.container}>
      <VideoIframe/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
