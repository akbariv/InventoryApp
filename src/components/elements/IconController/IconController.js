import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountIcon, Floatingbtn, LockedIcon } from '../../assets/Index'

export default function IconController({type}) { 
    if(type === 'AccountIcon'){
        return(
            <AccountIcon/>
        )
    }
    if(type === 'LockedIcon'){
        return(
            <LockedIcon/>
        )
    }
    if(type === 'Floatingbtn'){
        return(
            <Floatingbtn/>
        )
    }

  return (
    <View style={styles.container(type)}>

    </View> 
  )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF'
    }
})