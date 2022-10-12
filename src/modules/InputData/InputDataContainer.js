import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputDataComponents from './InputDataComponents'
import { useDispatch } from 'react-redux';
import InputDataReducer from './reducer/InputDataReducer';
import { useNavigation } from '@react-navigation/native';
import { SetData } from './action/InputDataAction';



export default function InputDataContainer () {
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice]=useState('');
  const [qty,setQty]=useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

 function handleSetId(value){
  setId(value);
 }

 function handleSetName(value){
  setName(value);
 }

 function handleSetPrice(value){
  setPrice(value);
 }
 function handleSetQty(value){
  setQty(value);
 }

 function handleSetData (){
//   InputDataReducer({type: 'SET_DATA',
//   id:id,name:name,
//   price:price,qty:qty
// })
dispatch(SetData({id:id, name: name, qty: qty, price: price}))
navigation.navigate('Home');
}  


  
    return (
      <InputDataComponents
      id={id}
      name={name}
      price={price}
      qty={qty}
      handleSetId={handleSetId}
      handleSetName={handleSetName}
      handleSetPrice={handleSetPrice}
      handleSetQty={handleSetQty}
      handleSetData={handleSetData}
      />
      )
    
}

const styles = StyleSheet.create({})