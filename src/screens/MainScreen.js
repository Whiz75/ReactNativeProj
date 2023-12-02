import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './menu/HomeScreen';
import ProfileScreen from './menu/ProfileScreen';
import SettingsScreen from './menu/SettingsScreen';

const Tab = createBottomTabNavigator();

const Container = () => {
    return (
        <PaperProvider>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="account" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cog" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>
    );
};

export default Container;
