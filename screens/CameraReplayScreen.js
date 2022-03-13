import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import * as FileSystem from "expo-file-system";
import { CommonActions, useNavigation } from '@react-navigation/native' 



export default function CameraScreen({route}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  // audio/video permissions
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [record, setRecord] = useState(null);
  // video playback
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const BACKEND = "https://arcane-retreat-40409.herokuapp.com/metrics/";
  const [recording, setRecording] = React.useState();
  const navigation = useNavigation()

  const analyzeVideo = async () => {
    try {
      console.log(route.params.paramKey)
      const response = await FileSystem.uploadAsync(
        BACKEND,
        route.params.paramKey
      );
      // console.log(response)
      const body = JSON.parse(response.body);
      // setText(body.text);
      console.log(body)
      navigation.navigate('Analysis', {paramKey: body});

    } catch (err) {
      console.error(err);
    }    
  }

  return (    
    <><View style={styles.cameraContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: route.params.paramKey,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)} />

      <View style={styles.buttons}>
        <Button
          title={'Analyze'}
          onPress={() => analyzeVideo()} />
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 2,
    // flexDirection: 'row',
    justifyContent: 'center'
},
  video: {
    alignSelf: 'center',
    padding: '50%',
    height: '96%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
