import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../res/Constants'

export default function InputNumberBtn({value,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor:COLORS.primary,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:COLORS.white,
        fontSize:20
    }
})
