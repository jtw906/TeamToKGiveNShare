import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, Button, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native'
import {Card, FAB} from 'react-native-paper'
import axios from 'axios'

function Login(props) {
    const [state,setState] = useState({
        email: '',
        password: '',
    })
    
    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </Card>
        )
    }

    const onPressSignUp = () => {
        props.navigation.navigate('SignUp');
    };
    const onPressLogin = () => {
        // Do something about login operation
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>
            <View style={styles.textbox}>
                <Text style={styles.text}> Email (Username) </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({email:text})}
                />
            </View>
            <View style={styles.textbox}>
                <Text style={styles.text}> Password </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({password:text})}
                />
            </View>
            <TouchableOpacity
                onPress = {onPressForgotPassword}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {onPressSignUp}>
                <Text style={styles.inputText}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:"#000000",
        marginBottom: 40,
    },
    textbox:{
        width:"75%",
        backgroundColor:"#FFFFFF",
        height:20,
        justifyContent:"left",
    },
    text:{
        color:"#000000",
        top:"5%",
        // marginLeft: 10,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#F29D39",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        borderColor: "#000000",
        borderWidth: 2,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    cardStyle: {
        margin: 10,
        padding: 10
    },
    logo: {
        alignSelf: 'center',
    }
})

export default Login