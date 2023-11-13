import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate some loading process (e.g., fetching data, authentication check)
        const fakeLoadingProcess = setTimeout(() => {
            // Navigate to the next screen (replace 'HomeScreen' with your actual screen)
            navigation.replace('Login');
        }, 3000); // Adjust the duration as needed

        // Clear the timeout if the component is unmounted
        return () => clearTimeout(fakeLoadingProcess);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')} // Replace with the path to your logo
                style={styles.logo}/>

            <Text style={styles.loadingText}>Loading...</Text>
            <ActivityIndicator animating={true} color="#6200ea" size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Adjust the background color as needed
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },

    loadingText:{
        margin: 20,
        fontWeight: "bold",
    },
});

export default SplashScreen;
