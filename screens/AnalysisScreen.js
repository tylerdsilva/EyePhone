import * as React from 'react';
import {View, Button, Text, StyleSheet, TextInput, ScrollView, Image, KeyboardAvoidingView} from 'react-native';

const getMetricsFromAPI = () => {
    return fetch('https://arcane-retreat-40409.herokuapp.com/metrics/')
      .then((response) => response.json())
      .then((json) => {
        return json.parse(response.body);
      })
      .catch((error) => {
        console.error(error);
      });
  };

export default function AnalysisScreen({navigation}) {
    return (
        <>
        
        <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
            <Text style={styles.screenTitle}>Analysis</Text>
        </View>
        
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
        
        <KeyboardAvoidingView>
            <View style={styles.contentBox}>
                <Text style={styles.contentTitle}>Overview</Text>
                <View style={styles.subcontentBox}>
                    <Text style={styles.subcontentTitle}>PUPIL METRICS</Text>
                    <View style={styles.metricBox}>
                        <View style={styles.valueBox}>
                            <Text style={styles.metricTitle}>Diameter</Text>
                            <Text style={styles.metricValue}>response.body</Text>
                        </View>

                        <View style={styles.valueBox}>
                            <Text style={styles.metricTitle}>Area</Text>
                            <Text style={styles.metricValue}>3 mm2</Text>
                        </View>

                        <View style={styles.valueBox}>
                            <Text style={styles.metricTitle}>Light Reflex</Text>
                            <Text style={styles.metricValue}>42 mm</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.subcontentBox}>
                    <Text style={styles.subcontentTitle}>NEUROLOGICAL PUPILLARY INDEX</Text>
                    <View style={styles.metricBox}>
                        <View style={styles.valueBox}>
                            <Text style={styles.metricTitle}>Constriction</Text>
                            <Text style={styles.metricValue}>3.50</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.contentBox}>
                <Text style={styles.contentTitle}>Video Replay</Text>
                <View style={styles.imageBox}>
                    <Image style={styles.images} source={require('./analysis_image.png')}></Image>
                    <Image style={styles.images} source={require('./analysis_replay.png')}></Image>
                </View>
            </View>

            <View style={styles.contentBox}>
                <Text style={styles.contentTitle}>Notes</Text>
                    <TextInput
                        style={{
                            height: 230,
                            position: 'relative',
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
        </KeyboardAvoidingView>
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
    contentBox: {
        backgroundColor: 'white',
        margin: 20,
    },
    contentTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#323F4B'
    },
    subcontentBox: {
        marginTop: 30
    },
    subcontentTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1D73C3'
    },
    metricBox: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueBox: { // view
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        },
    metricTitle: { //parent of metricValue
        fontWeight: 'bold',
        fontSize: 14,
        color: '#7B8794'
        },
    metricValue: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#323F4B',
        marginTop: 6,
    },
    imageBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        // padding: 50
    },
    images: {
        flex: 1,
        marginTop: 30,
    }
})