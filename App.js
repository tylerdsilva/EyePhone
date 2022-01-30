import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdministratorLoginScreen, PatientLoginScreen,  PatientProfileScreen} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdministratorLogin" >
        <Stack.Screen name="AdministratorLogin" component= {AdministratorLoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PatientLogin" component= {PatientLoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PatientProfile" component= {PatientProfileScreen} options= {{title: 'Patient Profile'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
