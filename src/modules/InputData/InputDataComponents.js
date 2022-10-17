import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/elements/Input/Input'
import Button from '../../components/elements/Button/Button'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function InputDataComponents(props) {
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  
//   const setData = () =>{
//       dispatch({type: 'SET_DATA',
//       id:props.id,name:props.name,
//       price:props.price,qty:props.qty
//     })
//     navigation.navigate('Home');
//     }  

    return (
      <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tambah Produk</Text>
        <Text color={'#A5A5A5'}>Input Produk Baru</Text>
        <View height={30}/>
        <Input placeholder="Masukan ID Produk" label="ID" 
        value={props.id} onChangeText={(value=>props.handleSetId(value))} 
        />
        <Input placeholder="Masukan Nama Produk" label="Nama Produk" 
        value={props.name} onChangeText={(value=>props.handleSetName(value))} 
        />
        <Input placeholder="Masukan Harga Produk" label="Harga" 
         value={props.price} onChangeText={(value=>props.handleSetPrice(value))} 
        />
        <Input placeholder="Masukan jumlah quantity produk" label="Qty" 
        value={props.qty} onChangeText={(value=>props.handleSetQty(value))} 
        />
        <Button title="Konfirmasi" onPress={props.handleSetData}/>
       </ScrollView> 
    </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    title:{
        fontSize:26,fontWeight:'700',color:'#040507'
    }

})