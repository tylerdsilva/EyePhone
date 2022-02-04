import * as React from 'react';
import {View, Button, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import PatientLoginScreen from './PatientLoginScreen';
import AdministratorLoginScreen from './AdministratorLoginScreen';
import PatientHistoryScreen from './PatientHistoryScreen';

export default function PatientProfileScreen({navigation}) {
    return (
        <><View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
            <Text style={styles.screenTitle}>Patient Profile</Text>
        </View>
        <Button title="History"
                onPress={() => navigation.navigate('PatientHistory')} />
        
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <KeyboardAvoidingView behavior='padding'>
            <View>
                <Text style={styles.patientInfo}> Name: John Doe</Text>
                <Text style={styles.patientInfo}> Sex: Male</Text>
                <Text style={styles.patientInfo}> Age: 23</Text>
                <Text style={styles.patientInfo}> Height: 6'0</Text>
                <Text style={styles.patientInfo}> Weight: 200lbs</Text>
            </View>

            <View style={{ top: 40, flex: 1, borderBottomColor: 'black', borderBottomWidth: 0.5 }} />

            <View style={{ marginTop: 60 }}>
                <Text style={styles.patientSubHeading}> Prescribed Medications</Text>
                <TextInput
                    style={{
                        height: 90,
                        position: 'relative',
                        marginLeft: 25,
                        marginRight: 25,
                        marginTop: 20,
                        borderColor: '#7B8794',
                        borderWidth: 1,
                        borderRadius: 20,
                        backgroundColor: '#FFFFFF',
                        //   onChangeText={text => onChangeText(text)}
                        //   value={value}
                        // change in next sprint
                    }} />

            </View>

            <View style={{ marginTop: 60 }}>
                <Text style={styles.patientSubHeading}> Patient Notes</Text>
                <TextInput
                    style={{
                        height: 90,
                        position: 'relative',
                        marginLeft: 25,
                        marginRight: 25,
                        marginTop: 20,
                        borderColor: '#7B8794',
                        borderWidth: 1,
                        borderRadius: 20,
                        backgroundColor: '#FFFFFF',
                        //   onChangeText={text => onChangeText(text)}
                        //   value={value}
                        // change in next sprint
                    }} />
            </View>

        </KeyboardAvoidingView></ScrollView></>

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
    patientInfo: {
        fontSize: 16,
        position: 'relative',
        marginLeft: 20,
        marginTop: 20
    },
    patientSubHeading: {
        fontWeight: "bold",
        fontSize: 20,
        position: 'relative',
        marginLeft: 20
    },
})