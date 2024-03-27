import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {List, Divider, Provider as PaperProvider, TextInput, Text} from 'react-native-paper';
import { Avatar } from '@rneui/themed';

const Card =({item})=>{
    return (
        <View style={styles.card}>
            <Avatar
                size={42}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <Text style={styles.cardText}>{item}</Text>

        </View>
    );
};

function HistoryScreen() {

    const persons = [
        {
          id: "1",
          name: "Earnest Green",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "2",
          name: "Winston Orn",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "3",
          name: "Carlton Collins",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "4",
          name: "Malcolm Labadie",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "5",
          name: "Michelle Dare",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "6",
          name: "Carlton Zieme",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "7",
          name: "Jessie Dickinson",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "8",
          name: "Julian Gulgowski",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "9",
          name: "Ellen Veum",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "10",
          name: "Lorena Rice",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
      
        {
          id: "11",
          name: "Carlton Zieme",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "12",
          name: "Jessie Dickinson",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "13",
          name: "Julian Gulgowski",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "14",
          name: "Ellen Veum",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
        {
          id: "15",
          name: "Lorena Rice",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        },
      ];

    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.container}>
                {/* {itemList.map((item, index)=>(
                <Card item={item} index={index}/>)
                )} */}

            {persons.map((person) => {
                    return (
                    <View style={styles.card}>
                        <Avatar
                            size={42}
                            rounded
                            source={{ uri: person.avatar }}
                        />
                        <Text style={styles.cardText}>{person.name}</Text>
                    </View>
                    );
                })}
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
      },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 10,
        elevation: 3,
      },
      cardText: {
        fontSize: 12,
        fontWeight: 'bold',
      },
});

export default HistoryScreen;