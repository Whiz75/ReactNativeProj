import * as React from 'react';
import {View} from 'react-native';
import {Card, TextInput, Button, Text} from 'react-native-paper';

const RegisterScreen= ({ navigation }) => {
    return (

        <View>
            <Card>
                <Text>Register page</Text>
            </Card>

            <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
                BACK TO LOGIN
            </Button>
        </View>
    );
}

export default RegisterScreen;
