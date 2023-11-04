import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Practice = () => {

    const [myList, setMyList] = useState([]);
    const API = () => {
        try {
            // const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&ofset=0')
            // setMyList(response.data.results)
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(
                    (response) =>
                        response.json()
                ).then(
                    (data) => {
                        setMyList(data.results)
                    }
                ).catch(
                    (error => { console.log("error in catch", error) })
                )

        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        API();
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={myList}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: '100%', backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                            <Text style={{ color: 'white' }}>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Practice
