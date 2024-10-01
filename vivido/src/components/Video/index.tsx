import { useCallback, useState,  } from 'react'   
import { Alert, View, useWindowDimensions ,Text} from 'react-native'
import YoutubeIframe from 'react-native-youtube-iframe'

interface VideoFrameProps {
    videoId: string
}

export default function VideoIframe({videoId}: VideoFrameProps) {

    const [playing, setPlaying] = useState(false);

    const {width} = useWindowDimensions()

    const VIDEO_SPACE = width - (24 * 2)

    const onStateChange = useCallback((state: string) => {    
        if (state === "ended") {     
            setPlaying(false);      
            Alert.alert("video has finished playing!");    
        }
    }, [])

    return (
        <View className='w-full flex justify-center items-center'>
            <YoutubeIframe
                height={300}
                width={width}
                play={playing}
                videoId={videoId}
                onChangeState={onStateChange}
            />
        </View>
    )
};
// ?YHmS2P8pksM