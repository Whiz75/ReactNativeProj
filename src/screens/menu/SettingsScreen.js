import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Divider, Title, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = () => {
    return (
        <PaperProvider>
            <ScrollView style={styles.container}>
                <Title style={styles.title}>Settings</Title>

                <List.Section>
                    <List.Subheader>General</List.Subheader>
                    <List.Item
                        title="Notifications"
                        description="Receive notifications for updates"
                        left={() => <List.Icon icon="bell" />}
                        right={() => <Switch value={true} />}
                    />
                    <List.Item
                        title="Dark Mode"
                        description="Enable dark mode for the app"
                        left={() => <List.Icon icon="theme-light-dark" />}
                        right={() => <Switch value={false} />}
                    />
                </List.Section>

                <Divider />

                <List.Section>
                    <List.Subheader>Account</List.Subheader>
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
});

export default SettingsScreen;