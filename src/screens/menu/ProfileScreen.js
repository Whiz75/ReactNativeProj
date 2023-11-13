import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Title, Subheading, Divider, Button, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    return (
        <PaperProvider>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Avatar.Image size={100} source={{ uri: 'https://placekitten.com/100/100' }} />
                    <Title style={styles.username}>John Doe</Title>
                    <Subheading style={styles.email}>john.doe@example.com</Subheading>
                </View>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>About Me</Title>
                        <Subheading>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut efficitur justo. Nunc euismod erat in nunc
                            egestas, vel cursus velit accumsan.
                        </Subheading>
                    </Card.Content>
                </Card>

                <Divider />

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Interests</Title>
                        <Subheading>Sports, Travel, Reading</Subheading>
                    </Card.Content>
                </Card>

                <Divider />

                <Button
                    mode="contained"
                    icon={() => <Icon name="pencil" size={20} color="white" />}
                    style={styles.editButton}
                    onPress={() => console.log('Edit profile pressed')}
                >
                    Edit Profile
                </Button>
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
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    username: {
        marginTop: 8,
        marginBottom: 4,
    },
    email: {
        marginBottom: 16,
    },
    card: {
        marginVertical: 8,
    },
    editButton: {
        marginTop: 16,
        backgroundColor: '#6200ea', // Adjust the color as needed
    },
});

export default ProfileScreen;
