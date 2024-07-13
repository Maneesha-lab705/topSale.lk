import {Text, View ,Image,SafeAreaView,TextInput,StyleSheet,Alert,Button, TouchableOpacity, StatusBar} from "react-native";
import { Colors } from "@/constants/Colors";
import { router ,Link} from "expo-router";
import type {StatusBarStyle} from 'react-native';

export default function loginPage() {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Login Here!</Text>
    <Image source={require('@/assets/images/react-logo.png')}/>

    <View style={styles.form}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="#999"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                secureTextEntry
            />
        </View>

        <Button onPress={() => router.navigate('Home')} title="Login Now" color="#841584"  />

        {/* <TouchableOpacity style={styles.link} onPress={() => router.navigate('passwordReset')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity> */}
         <Link style={styles.link} href="/page">Forgot Password?</Link>

        {/* <TouchableOpacity style={styles.link} onPress={() => router.navigate('Signup')}>
            <Text style={styles.linkText}>Register Here</Text>
        </TouchableOpacity> */}

            <Link style={styles.link} href="/signupnow">Register Here</Link>
    </View>
</View>
  );
}                          


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '80%',
        marginTop: 30,
    },
    button: {
        marginTop: 20,
    },
    heading: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        color: '#333',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    link: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    linkText: {
        color: '#841584',
        textDecorationLine: 'underline',
    },

});
