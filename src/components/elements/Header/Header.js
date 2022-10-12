import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> InventoryApp </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:30,
        backgroundColor:'#FF4558',
        alignItems:'center'
    },
    title:{ textAlign:'center',
    fontSize:24,color:'#FFFFFF'
}
})