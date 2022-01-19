import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


const Task = (props) => {

    return ( <
        View style = { styles.item } >
        <
        View style = { styles.itemLeft } >
        <
        View style = { styles.square } > < /View> <
        Text style = { styles.itemText } > { props.text } < /Text> <
        /View> <
        View style = { styles.circular } > < /View> <
        /View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 21,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#b3b2b3',
        opacity: 0.5,
        borderRadius: 9,
        marginRight: 14

    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#b3b3b3',
        borderWidth: 2,
        borderRadius: 5,

    },
})

export default Task;