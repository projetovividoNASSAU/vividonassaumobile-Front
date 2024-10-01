import { useCallback, useState } from 'react';
import { Alert, Button, View } from 'react-native'
import YoutubeIframe from 'react-native-youtube-iframe'
export default function VideoIframe() {
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state: string) => {    
        if (state === "ended") {     
            setPlaying(false);      
            Alert.alert("video has finished playing!");    
        }
    }, []);
    const togglePlaying = useCallback(() => {    
        setPlaying((prev) => !prev);  
    }, []);
    return (
        <View>
            <YoutubeIframe
                height={300}
                play={playing}
                videoId='YHmS2P8pksM'
                onChangeState={onStateChange}
            />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
    )
};
