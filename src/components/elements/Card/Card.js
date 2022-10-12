import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({name,quantity,harga}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.details}>
        <Text style={styles.price}>Harga :</Text>
        <View width={16} />
        <Text style={styles.pricetag}>{harga}</Text> 
      </View>
      <View style={styles.details}>
        <Text>Qty :   </Text>
        <View width={16} />
        <Text style={styles.qty}>{quantity}</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        padding:16,borderBottomWidth:2,borderColor:'#000000'
    },
    title:{
        fontSize:16,color:'#000000',fontWeight:'700',marginBottom:5
    },
    details:{
        flexDirection:'row',marginTop:5
    },
    price:{
        fontSize:12,
    },
    pricetag:{
        fontSize:12, color:'#FF7E21',fontWeight:'700'
    },
    qty:{
        fontSize:12, color:'#000000',fontWeight:'700'
    }

})