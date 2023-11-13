import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Provider as PaperProvider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    return (
        <PaperProvider>
            <ScrollView style={styles.container}>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://placekitten.com/600/300' }} />
                    <Card.Content>
                        <Title>Beautiful Cat</Title>
                        <Paragraph>Cute cat enjoying the sun!</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button icon={() => <Icon name="heart" size={20} color="#6200ea" />} onPress={() => console.log('Pressed')}>
                            Like
                        </Button>
                        <Button icon={() => <Icon name="comment" size={20} color="#6200ea" />} onPress={() => console.log('Pressed')}>
                            Comment
                        </Button>
                    </Card.Actions>
                </Card>

                {/* Add more cards or components as needed */}
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
    card: {
        marginBottom: 16,
    },
});

export default HomeScreen;
