import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import MapView, {Marker} from "react-native-maps";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Searchbar style={styles.card}
                    mode={"bar"}
                    icon=""
                    placeholder={"Search"}
                    onChangeText={onChangeSearch}
                    value={searchQuery}/>

                <MapView style={styles.mapStyle}
                 initialRegion={{
                     latitude: -26.1944390074494,
                     longitude: 28.04794381182685,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                 }}>

                <Marker
                    draggable
                    coordinate={{
                        latitude: -26.1944390074494,
                        longitude: 28.04794381182685,
                    }}
                    onDragEnd={
                        (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                    }
                    title={'Test Marker'}
                    description={'This is a description of the marker'}/>
                </MapView>
            </ScrollView>

            <Button
                mode="contained"
                style={styles.button}>
                SELECT BOLT
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex:1,
    },
    mapStyle:{
        height: hp('100%'),
        width: wp('100%'),
    },
    card: {
        marginBottom: 16,
    },
    cardButton:{
      backgroundColor: '#32BB78',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: hp('50%'),
        width: wp('80%'),
    },
    button: {
        borderRadius: 20,
        padding:5,
        elevation: 2,
        backgroundColor: '#32BB78',
        margin:10,
    },
    buttonOpen: {
        backgroundColor: '#32BB78',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default HomeScreen;
