import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function PatientLoginScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', top: 160 }}>
          <Text style = {styles.patientLoginTitle}>Welcome, Dr. Iris!</Text>
          <Text style = {styles.patientLoginDesc}>Enter patient's health card information</Text>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('PatientProfile')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  patientLoginTitle: {
    fontWeight: "bold",
    fontSize: 30,
    position: 'relative',
  },
  patientLoginDesc: {
    fontSize: 16,
    top: 20,
    marginBottom: 40,
  },
})
