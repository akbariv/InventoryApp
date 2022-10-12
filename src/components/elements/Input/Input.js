import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Input({label,placeholder,value,onChangeText}) {
  return (
    <View marginBottom={16}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,borderRadius:10,backgroundColor:'#F6F7FA'
    },
    label:{
        color:'#7D8797',fontWeight:'400',fontSize:12
    }
})