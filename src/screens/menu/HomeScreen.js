import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Divider, List, Searchbar, FAB, Portal, Dialog, Text, Button } from "react-native-paper";
import * as Location from 'expo-location';

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
    const bottomSheetRef = useRef();

    const [currentLocation, setCurrentLocation] = useState(0);
    const [address, setAddress] = useState('');
    const [initialRegion, setInitialRegion] = useState(null);

    /*Search location*/
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState(null);

    /* Dialog properties */
    const [visible, setVisible] = useState(false);
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

            // Call GetCurrentLocation to update the address
            GetCurrentLocation(location.coords.latitude, location.coords.longitude);
        };
        getLocation();
    }, []);

    // Method to get the current location and set the address
    const GetCurrentLocation = async (latitude, longitude) => {
        let response = await Location.reverseGeocodeAsync({ latitude, longitude });

        for (let item of response) {
            let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
            setAddress(address);
        }
    };

    //handle bottomsheet state
    const onPress =() => {
        if(!visible){
            bottomSheetRef.current.Actions.showBottomSheet;
        }else if(visible){
            bottomSheetRef.current.Actions.hideBottomSheet;
        }
    };

    //handle location search
    const handleSearch = async () => {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Location permission is required.');
            return;
          }
    
          const locationResult = await Location.geocodeAsync(searchQuery);
          if (locationResult.length > 0) {
            setLocation(locationResult[0]);
          } else {
            Alert.alert('Location Not Found', 'No results found for the provided query.');
          }
        } catch (error) {
          console.error('Error fetching location: ', error);
          Alert.alert('Error', 'An error occurred while fetching location.');
        }
      };

    return (
        <View style={styles.container}>
            {initialRegion && (
                <MapView style={styles.map} initialRegion={initialRegion}>
                    {currentLocation && (
                        <Marker
                            coordinate={{
                                latitude: currentLocation.latitude, longitude: currentLocation.longitude,
                            }}
                            title="My Location"
                            draggable={true} />)}
                </MapView>)}

            <FAB
                icon="menu"
                animated={true}
                style={styles.fab}
                onPress={showDialog} />

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} theme={{ colors: { primary: 'green' } }}>
                    <Dialog.Title>Location</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Your address is: {address}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <BottomSheet ref={bottomSheetRef} isOpen={true} onPress={onPress}>
                <View>
                    <Searchbar
                        style={styles.searchBar}
                        mode={"bar"}
                        icon=""
                        placeholder={"Where to?"}
                        loading={false}
                        value={searchQuery} />
                </View>

                <List.Section>
                    <List.Item title={address} left={() => <List.Icon icon="history" />} />
                    <Divider />
                    <List.Item Button onPress={handleSearch} />
                    {location && (
                    <View style={{ marginTop: 20 }}>
                    <Text>Location Found:</Text>
                    <Text>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Text>
                    </View>
      )}
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
    searchBar: {
        margin: 5,
        backgroundColor: 'lightgray',
        shadowOpacity: 2,
        shadowColor: 'gray',
        elevation: 2,
        borderRadius: 5,
        fontStyle: "bold",
    },
    button: {
        borderRadius: 5,
        padding: 5,
        elevation: 2,
        backgroundColor: '#32BB78',
        margin: 5,
    },
    fab: {
        position: 'absolute',
        backgroundColor: 'white',
        margin: 16,
        left: 0,
        top: 0,
    },
    title: {
        fontStyle: "bold",
    },
});

export default HomeScreen;
