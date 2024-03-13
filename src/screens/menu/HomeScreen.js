import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {Divider, List, Searchbar,FAB,Portal, Dialog, Text,Button} from "react-native-paper";
import * as Location  from 'expo-location'

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
    const bottomSheetRef = useRef();

    const [currentLocation, setCurrentLocation] = useState(null);
    const [userAddress, setUserAddress] = useState('');
    const [initialRegion, setInitialRegion] = useState(null);

    /*Dialog properties */
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            setInitialRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });

        };
        getLocation();
    }, []);

    // create the handler method
    const GetCurrentLocation = async () => {

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({latitude, longitude});

            for (let item of response) {
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
                setUserAddress({address});
            }
        }
        await GetCurrentLocation();
    };


    return (
        <View style={styles.container}>
            {initialRegion && (
                <MapView style={styles.map} initialRegion={initialRegion}>
                    {currentLocation && (
                        <Marker
                            coordinate={{
                                latitude: currentLocation.latitude, longitude: currentLocation.longitude,}}
                            title="Your Location"
                            draggable={true}/>)}
                </MapView>)}

            <FAB
                icon="menu"
                animated={true}
                style={styles.fab}
                onPress={showDialog}/>

            <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} theme={{ colors: { primary: 'green' } }}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
            </Dialog>
            </Portal>

            <BottomSheet ref={bottomSheetRef} isOpen={true}>
                <View>
                    <Searchbar style={styles.searchBar}
                       mode={"bar"}
                       icon=""
                       placeholder={"Where to?"}
                       loading={false}/>
                </View>

                <List.Section>
                    <List.Item title="Diepkloof, zone 1" left={() => <List.Icon icon="history" />} />
                    <Divider/>
                    <List.Item title="Diepkloof, zone 3" left={() => <List.Icon icon="history" />} />
                </List.Section>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    searchBar: {
        margin: 5,
        backgroundColor:'lightgray',
        shadowOpacity:2,
        shadowColor:'grav',
        elevation:2,
        borderRadius:5,
        fontStyle: "bold",
    },
    button: {
        borderRadius: 5,
        padding:5,
        elevation: 2,
        backgroundColor: '#32BB78',
        margin:5,
    },
    fab:{
        position: 'absolute',
        backgroundColor: 'white',
        margin: 16,
        left: 0,
        top: 0,
    },
    title:{
        fontStyle: "bold",
    },
});

export default HomeScreen;
