import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import InputDataComponents from './InputDataComponents'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SetData } from './action/InputDataAction';
import {useSelector} from 'react-redux';


export default function InputDataContainer () {
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice]=useState('');
  const [qty,setQty]=useState('');
  // const [listData, setlistData]= useState([]);



  
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
   dispatch(SetData({id:id, name: name,
    qty: qty, price: price}))
    console.log(id,name,qty,price)
    //console.log('Testi')
    // addList();
    navigation.navigate('Home');
  } 

//  function addList(){
//   setItemCard((currentData)=>[
//   ...currentData,SetData,
//   ]);
//  }

  //   InputDataReducer({type: 'SET_DATA',
  //   id:id,name:name,
  //   price:price,qty:qty
  // })


  
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