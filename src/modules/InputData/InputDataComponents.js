import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/elements/Input/Input'
import Button from '../../components/elements/Button/Button'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function InputDataComponents() {
  
  const [id,setId]=useState('');
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [qty,setQty]=useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  // const setData = this.props;
  const stateGlobal = useSelector(state=>state);
  const setData = () =>{
      dispatch({type: 'SET_DATA',
      id:id,name:name,
      price:price,qty:qty
    })
    navigation.navigate('Home');
    }  

    return (
      <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tambah Produk</Text>
        <Text color={'#A5A5A5'}>Input Produk Baru</Text>
        <View height={30}/>
        <Input placeholder="Masukan ID Produk" label="ID" 
        value={id} onChangeText={(value=>setId(value))} 
        />
        <Input placeholder="Masukan Nama Produk" label="Nama Produk" 
        value={name} onChangeText={(value=>setName(value))} 
        />
        <Input placeholder="Masukan Harga Produk" label="Harga" 
         value={price} onChangeText={(value=>setPrice(value))} 
        />
        <Input placeholder="Masukan jumlah quantity produk" label="Qty" 
        value={qty} onChangeText={(value=>setQty(value))} 
        />
        <Button title="Konfirmasi" onPress={setData}/>
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