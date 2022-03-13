import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdministratorLoginScreen, PatientLoginScreen,  PatientProfileScreen, PatientHistoryScreen, AnalysisScreen, CameraScreen, CameraReplayScreen } from './screens';

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
