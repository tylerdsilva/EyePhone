import * as React from 'react';
import {View, Button, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';

export default function PatientHistoryScreen({navigation}) {
    return (
        <><View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
            <Text style={styles.screenTitle}>Patient Profile</Text>
        </View>
        <Button title="Info"
                        onPress={() => navigation.navigate('PatientProfile')}/>

        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={styles.testBox}>
                    <Text style={styles.testDate}>January 1, 2022</Text>
                </View>
                <View style={styles.testBox}>
                    <Text style={styles.testDate}>December 14, 2021</Text>
                </View>
                <View style={styles.testBox}>
                    <Text style={styles.testDate}>November 21, 2021</Text>
                </View>
                <View style={styles.testBox}>
                    <Text style={styles.testDate}>October 10, 2021</Text>
                </View>
            </ScrollView></>
      );
}

const styles = StyleSheet.create({
    screenTitle: {
        fontWeight: "bold",
        fontSize: 20,
        position: 'relative',
        alignItems: 'center',
        marginTop: 56,
        marginBottom: 16
    },
    testBox: {
        backgroundColor: '#FFFFFF',
        borderBottomColor: 'black', borderBottomWidth: 0.5
    },
    testDate: {
        marginTop: 28,
        marginBottom: 28,
        marginLeft: 49,
        fontWeight: 'bold'
    }
})