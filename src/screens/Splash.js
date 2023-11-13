import {StyleSheet, Text, Image, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button} from "react-native-paper";

const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}/>

                <Text
                    className="text-white font-bold text-4xl text-center" style={styles.title}>
                    Let's Get Started!
                </Text>

                <Button style={styles.btn} mode={"contained"} onPress={()=>{navigation.navigate('Login')}}>GET STARTED</Button>
            </View>

            <View style={styles.footer}>
                <Text>VERSION 1.0.0</Text>
            </View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
    },

    logo:{
        width: 100,
        height: 100,
        borderRadius: 100/2,
        marginBottom:10,
    },

    content:{
        flex: 1,
        justifyContent: "center",
    },

    btn:{
        width: wp('80%'),
        borderRadius: 2,
    },

    footer:{
        bottom: 0,
        position: "absolute",
        marginBottom: 10,
        fontStyle: "normal",
    },
});