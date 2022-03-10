import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import * as FileSystem from "expo-file-system";


export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  // audio/video permissions
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [record, setRecord] = useState(null);
  // video playback
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const BACKEND = "https://nameless-beyond-55383.herokuapp.com/metrics/";
  const [recording, setRecording] = React.useState();
  



useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');

})();
  }, []);
  
  if (hasCameraPermission === false || hasAudioPermission === false || hasCameraPermission === null || hasAudioPermission === null) {
    return <Text>No access to camera</Text>;
  }

const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  const takeVideo = async () => {
    if(camera){
        // const data = await camera.recordAsync()
        const recording = await camera.recordAsync();
        // setRecord(data.uri);
        // console.log(data.uri);
        setRecording(recording);
        console.log(recording);
    }
    
  }


  // const stopVideo = async () => {
  //   camera.stopRecording();
  //   try {
  //     const response = await FileSystem.uploadAsync(
  //       BACKEND,
  //       uri
  //     );
  //     const body = JSON.parse(response.body);
  //     setText(body.text);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const stopVideo = async () => {
    camera.stopRecording();
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log(recording)


    try {
      const response = await FileSystem.uploadAsync(
        BACKEND,
        uri
      );
      const body = JSON.parse(response.body);
      setText(body.text);
      console.log("ayo");
      console.log(body);
    } catch (err) {
      console.error(err);
      this.setState({errorMessage: error.message});
    }

  }


  return (    
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>
      <Button
        title="Flip Video"
        onPress={() => {
        setType(
          type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
          );
          }}>
      </Button>

      <Button title="Take video" onPress={() => takeVideo()} />
      <Button title="Stop Video" onPress={() => stopVideo()} />

       {/* <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{uri: image}} style={{flex:1}}/>} */}

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: record,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>

   </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
