import * as React from 'react';
import {Card, TextInput, Button, Text} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View,StyleSheet} from "react-native";

const LoginScreen = ({ navigation }) =>{
    return(
        <View className="flex-1 bg-white" style={styles.container}>

            <Card style={styles.card} >
                {/* Your JSX Elements */}
                <Card.Content>
                    <Text>LOGIN</Text>
                    <TextInput
                        style={styles.input}
                        dense={true}
                        inputMode={"email"}
                        mode={"outlined"}
                        label="Email"
                        placeholder={'Email address'}/>

                    <TextInput
                        style={styles.input}
                        dense={true}
                        inputMode={"text"}
                        mode={"outlined"}
                        label="Password"
                        placeholder={'Password'}
                    />

                    <Text>forgot password?</Text>
                </Card.Content>

                <Card.Actions>
                    <Button
                        style={styles.horizontalButtons}
                        uppercase={true}
                        mode={"contained"}
                        title={'register'}>REGISTER</Button>

                    <Button style={styles.horizontalButtons}
                            uppercase={true} mode={"contained"}
                            title={'login'}
                            onPress={()=>{navigation.navigate('Register')}}>LOGIN</Button>
                </Card.Actions>
            </Card>

            <View style={styles.footer}>
                <Text>version 1.0.0</Text>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },

    card: {
        shadowColor: '#808080',
        alignContent: "center",
        backgroundColor: '#fff',
        shadow: true,
        elevation:8,
        width: wp('80%'),
        height: hp('35%'),
    },

    title:{
        fontStyle: "bold",
        fontFamily:'bungee',
        fontWeight: hp('2%'),
        marginTop:10,
        marginBottom:10,
    },

    input:{
        width:wp('73%'),
        height:40,
        marginTop:10,
        marginBottom:10,
        backgroundColor: 'white',
    },

    buttons:{
        borderRadius:2,
    },

    horizontalButtons:{
        flex:1,
        borderRadius: 2,
        width: wp('70%'),
        justifyContent: "center",
        margin:10,
    },

    footer:{
        bottom: 0,
        position: "absolute",
        marginBottom: 10,
        fontStyle: "normal",
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginBottom: 5,
    },
});