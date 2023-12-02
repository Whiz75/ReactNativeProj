import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {List, Divider, Provider as PaperProvider, TextInput} from 'react-native-paper';

const SettingsScreen = () => {
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
                        onPress={() => console.log('Change Password pressed')}
                    />
                    <List.Item
                        title="Logout"
                        left={() => <List.Icon icon="logout" />}
                        onPress={() => console.log('Logout pressed')}
                    />
                </List.Section>
            </ScrollView>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input:{
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth:1,
        borderBottomColor:'#B0C4DE'
    },
});

export default SettingsScreen;