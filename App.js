import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdministratorLoginScreen, PatientLoginScreen,  PatientProfileScreen, PatientHistoryScreen, AnalysisScreen, CameraScreen, CameraReplayScreen } from './screens';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdministratorLogin" >
        <Stack.Screen name="AdministratorLogin" component= {AdministratorLoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PatientLogin" component= {PatientLoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PatientProfile" component= {PatientProfileScreen} options= {{headerShown: false}}/>
        <Stack.Screen name="PatientHistory" component= {PatientHistoryScreen} options= {{headerShown: false}}/>
        <Stack.Screen name="Analysis" component= {AnalysisScreen} options= {{headerShown: false}}/>
        <Stack.Screen name="Camera" component= {CameraScreen} options= {{headerShown: false}}/>
        <Stack.Screen name="CameraReplay" component= {CameraReplayScreen} options= {{headerShown: false}}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
}
