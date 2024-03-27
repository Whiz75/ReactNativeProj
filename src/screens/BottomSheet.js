// Import necessary modules from React and React Native
import React, {useState} from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import {Dialog, Portal} from "react-native-paper";

// BottomSheet component
const BottomSheet = () => {

    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    const showDialog = () => setVisible(true);

    return (
        // Render modal for the bottom sheet
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

// Style sheet for the BottomSheet component
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title:{
      fontSize:26,
    },
});

// Export the BottomSheet component
export default BottomSheet;
