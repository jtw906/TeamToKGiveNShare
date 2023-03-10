import React, {useState, useEffect, useRef} from 'react'
import {View, Text, TextInput, StyleSheet, Button, FlatList, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'
import {Card, FAB} from 'react-native-paper'
import PhoneInput from 'react-native-phone-number-input'
import axios from 'axios'

function SignUp(props) {
    const [state,setState] = useState({
        email: '',
        fullname: '',
        phone_number: '',
        password: '',
    })
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    const handleTouch = () => {
        Keyboard.dismiss();
    };

    const onPressLogin = () => {
        props.navigation.navigate('Login');
    };
    const onPressSignUp = () => {
        // Do something about login operation
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sign Up </Text>
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
                <Text style={styles.text}> Fullname </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Fullname"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({fullname:text})}
                />
            </View>

            <View style={styles.textbox}>
                <Text style={styles.text}> Phone Number </Text>
            </View>
            <KeyboardAvoidingView behavior="padding">
                <TouchableWithoutFeedback onPress={handleTouch} activeOpacity={1}>
                    <View>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="US"
                            onChange={(text) => {
                                setValue(text);
                            }}
                            keyboardType="phone-pad"
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            

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
                onPress = {onPressSignUp}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>SIGN UP </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {onPressLogin}>
                <Text style={styles.inputText}>Login</Text>
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

export default SignUp