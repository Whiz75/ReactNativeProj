import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {List, Divider, Provider as PaperProvider, TextInput} from 'react-native-paper';

const ProfileScreen = () => {

    return (
        <PaperProvider>
            <ScrollView style={styles.container}>
                <List.Section>
                    <List.Subheader>Personal Information</List.Subheader>
                    <TextInput
                        label="Firstname"
                        mode="outlined"
                        style={styles.input}/>

                    <TextInput
                        label="Lastname"
                        mode="outlined"
                        style={styles.input}/>

                    <TextInput
                        label="Email address"
                        mode="outlined"
                        style={styles.input}/>
                </List.Section>

                <Divider />

                <List.Section>
                    <List.Item
                        title="Change Password"
                        left={() => <List.Icon icon="lock" />}
                        onPress={() => console.log('Change Password pressed')}/>

                    <List.Item
                        title="Logout"
                        left={() => <List.Icon icon="logout" />}
                        onPress={() => console.log('Logout pressed')}/>
                </List.Section>
            </ScrollView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:16,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 160,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius:60,
    },
    formContainer: {
        marginHorizontal: 20,
        marginTop: 50,
        padding:20,
        borderRadius:10,
        backgroundColor:'rgba(255, 255, 255, 0.3)'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
        padding:10,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth:1,
        borderBottomColor:'#B0C4DE'
    },
    loginButton: {
        backgroundColor: '#32BB78',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },

    openButton: {
        fontSize: 20,
        color: 'blue',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ProfileScreen;
