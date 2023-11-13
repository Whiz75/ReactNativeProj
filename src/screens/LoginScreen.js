import React, { useState } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { TextInput, Button, Title, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const handleLogin = () => {
        // Your login logic goes here
        // For demonstration purposes, let's just show a snackbar
        setSnackbarVisible(true);
        navigation.navigate('MainContainer');
    };

    const handleRegister = () => {
        // Your login logic goes here
        // For demonstration purposes, let's just show a snackbar
        setSnackbarVisible(true);
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>

            {/*<Image
                source={require('../assets/logo.png')} // Replace with the path to your logo
                style={styles.logo}
            />*/}

            <Title style={styles.title}>Login</Title>

            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                mode="outlined"
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.loginButton}>
                LOGIN
            </Button>

            <Button
                mode="contained"
                onPress={handleRegister}
                style={styles.loginButton}>
                REGISTER
            </Button>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'OK',
                    onPress: () => setSnackbarVisible(false),
                }}
            >
                Login successful! (Replace with your logic)
            </Snackbar>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'OK',
                    onPress: () => setSnackbarVisible(false),
                }}>
                Register successful! (Replace with your logic)
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'left',
        textTransform:"capitalize",
        fontWeight: "bold",
    },
    input: {
        marginBottom: 16,
    },
    loginButton: {
        marginTop: 10,
        borderRadius: 4,
    },
});

export default LoginScreen;
