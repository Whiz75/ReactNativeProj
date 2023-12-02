import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const SignUpScreen = ({navigation}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Your sign-up logic goes here
        // For demonstration purposes, let's just log the data
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        navigation.navigate('MainContainer');
    };

    const handleBackToLogin =()=>{
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>

            <Title style={styles.title}>Sign Up</Title>

            <TextInput
                label="Firstname"
                value={firstname}
                onChangeText={(text) => setFirstname(text)}
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Lastname"
                value={lastname}
                onChangeText={(text) => setLastname(text)}
                mode="outlined"
                style={styles.input}
            />

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

            <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
                mode="outlined"
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={handleSignUp}
                style={styles.signUpButton}>
                SIGN UP
            </Button>

            <Button
                mode="contained"
                onPress={handleBackToLogin}
                style={styles.signUpButton}>
                BACK TO LOGIN
            </Button>
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
        textTransform: "uppercase",
    },
    input: {
        marginBottom: 10,
    },
    signUpButton: {
        marginTop: 16,
        borderRadius: 4,
        backgroundColor:'#32BB78',
    },
});

export default SignUpScreen;
