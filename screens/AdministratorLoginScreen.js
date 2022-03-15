import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function AdministratorLoginScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', top: 160 }}>
          <Text style = {styles.adminLoginTitle}>Welcome to Eye Phone!</Text>
          <Text style = {styles.adminLoginDesc}>Enter your unique 6-digit user code</Text>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('PatientLogin')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  adminLoginTitle: {
    fontWeight: "bold",
    // fontFamily: "Mulish",
    fontSize: 30,
    position: 'relative',
  },
  adminLoginDesc: {
    fontSize: 16,
    top: 20,
    marginBottom: 40,
  },
})
