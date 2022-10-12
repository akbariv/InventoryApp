import { StyleSheet, View,Text } from 'react-native'
import React from 'react'
import Header from '../../components/elements/Header/Header'
import Card from '../../components/elements/Card/Card'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import IconController from '../../components/elements/IconController/IconController'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function HomeComponents() {

  const stateGlobal = useSelector(state=>state);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Card quantity={stateGlobal.qty} name={stateGlobal.name} harga={"Rp." + stateGlobal.price}/>
      <Card quantity='16' name='Pulpen' harga='Rp. 8.500.000'/>
      <Card quantity='16' name='Pensil' harga='Rp. 8.500.000'/>
      <Card quantity='16' name='Buku' harga='Rp. 8.500.000'/>
      <Card quantity='16' name='Charger Laptop' harga='Rp. 8.500.000'/>
      <Card quantity='16' name='Kabel USB' harga='Rp. 8.500.000'/>
      <Card quantity='16' name='ID Card' harga='Rp. 8.500.000'/>
      </ScrollView>
      <TouchableOpacity style={styles.floatingBtn} onPress={()=>navigation.navigate('Input')}>
      <IconController style={styles.btn} type="Floatingbtn"/>
      </TouchableOpacity>   

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    floatingBtn:{
      alignItems:'center',
      shadowRadius:10,shadowOpacity:0.3,shadowOffset:{height:10}

    },
    btn:{
      position:'absolute'
    }
})