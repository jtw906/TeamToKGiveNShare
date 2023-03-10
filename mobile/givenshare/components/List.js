import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import {Card, FAB} from 'react-native-paper'
import axios from 'axios'

function List(props) {
    const data = [
        {id:1, name:"Jojo", age:'24'},
        {id:2, name:"Ashe", age:'21'},
    ]
    
    //const [data, setData] = useState([]);
    
    useEffect(() => {
        /*
        fetch('http://192.168.1.6/3000/get', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
        .catch(error => {
            console.log(error)
        })
        */
    }, [])
    
    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </Card>
        )
    }
    
    return (
        <View style={{flex:1}} >
            <FlatList data={data} renderItem={({item}) => { return renderData(item) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        padding: 10
    }
})

export default List