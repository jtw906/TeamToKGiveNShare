import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'

function Create(props) {
    const[name, setName] = useState("")
    const[age, setAge] = useState("")

    function insertData() {        
        fetch('http://10.226.24.211:3000/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                age: age,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            props.navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View>
            <TextInput 
                style = {styles.inputStyle}
                label = 'Name'
                value = {name}
                mode = "outlined"
                onChangeText = {text => setName(text)}
            />
            <TextInput 
                style = {{margin:10}}
                label = 'Age'
                value = {age}
                mode = "outlined"
                onChangeText = {text => setAge(text)}
            />
            <Button
                style={{margin:10}}
                icon='pencil'
                mode='contained'
                onPress={() => insertData()}
            >Add User</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddind:10,
        margin:10,
        marginTop:30
    }
})

export default Create