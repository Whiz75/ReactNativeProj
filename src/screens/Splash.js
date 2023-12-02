import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

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
            {/*<Image
                source={require('../assets/logo.png')} // Replace with the path to your logo
                style={styles.logo}/>*/}

            <LottieView
                style={styles.logo}
                source={require('../assets/loading_anim.json')} autoPlay loop />
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
        width: wp('100%'),
        height: hp('50%'),
        marginBottom: 16,
    },
});

export default SplashScreen;
