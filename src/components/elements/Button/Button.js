import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Button({title,onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,backgroundColor:'#FF4558',padding:10,justifyContent:'center',alignItems:'center'
    },
    title:{
        fontSize:20,color:'#FFFFFF'
    },  
})