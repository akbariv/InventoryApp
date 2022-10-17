import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputLogin from '../../components/elements/Input/InputLogin'
import Button from '../../components/elements/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function LoginComponents() {
  
  const navigation = useNavigation();
  const stateGlobal = useSelector(state=>state);

    return (
  <View style={styles.content}>
    <View marginBottom={43}>  
      <Text style={styles.title}>Masuk</Text>
      <Text>Sudah punya akun? masuk sekarang</Text>
      <View height={30}/>

      <View style={styles.input}>
        <InputLogin 
        label={'Email'} 
        placeHolder={'Masukan nomor handphone atau email'}
        icon="user-circle"
        />
        <View height={16}/>
        <InputLogin 
        label={'Kata Sandi'} 
        placeHolder={'Masukan password'}
        icon="lock"/>
      </View>

    </View>
      <View style={styles.forgotpass}>
        <Text>Lupa password? Klik Disini</Text>
      </View>

    <Button title="Masuk" onPress={()=>navigation.navigate('Input')}/>
  </View>
  )
}

const styles = StyleSheet.create({
    content:{padding:22,backgroundColor:'#00000'},
    title:{
        color:'#040507',fontSize:26,
    },
    forgotpass:{
      flexDirection:'column', alignItems:'flex-end',
      marginBottom:16,marginRight:2
    },
})