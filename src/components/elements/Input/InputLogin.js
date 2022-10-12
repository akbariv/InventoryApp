import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';




export default function InputLogin({label,placeHolder,icon}) {
    // if(InputType === 'Email'){
    //     return()
    // }



  return (
    <View styles={styles.content}>
        <Text>{label}</Text>
        <View style={styles.container}>
            <View>
            {/* <IconController type={typeIcon}/> */}
            <Icon
            style={styles.icon}
            name={icon}
            size={24}
            />
            </View>
           <View width={10}/>
            <TextInput style={styles.input}placeholder={placeHolder}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
    input:{ 
    backgroundColor: '#F6F7FA',
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius:15,
    },
    container:{
        flexDirection: 'row', marginTop: 10,alignItems:'center'
        ,backgroundColor:'#F6F7FA', borderRadius:15,
    },
    icon: {
        color: '#FF4558',
        margin:10
    },
})