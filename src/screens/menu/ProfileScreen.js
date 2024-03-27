import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {List, Divider, Provider as PaperProvider, TextInput} from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { Avatar } from '@rneui/themed';

// Function to extract initials from the name
const getInitials = (name) => {
    return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};

const ProfileScreen = () => {

    return (
      <View style={styles.container}>
        <Avatar source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} 
          style={styles.profileImage} />

        <Text style={styles.username}>John Doe</Text>

        <Text style={styles.bio}>Software Engineer</Text>

        <View style={styles.statsContainer}>
          <Text style={styles.seperator}>Followers: 1.2K</Text>
          <Text style={styles.seperator}>|</Text>
          <Text style={styles.seperator}>Following: 345</Text>
          <Text style={styles.seperator}>|</Text>
          <Text style={styles.seperator}>Posts: 256</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  bio: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
  },
  seperator: {
    marginRight: 5,
    color: '#cccccc',
  },
});

export default ProfileScreen;
