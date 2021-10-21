import React,{useState} from "react"
import {Text,View,Button,StyleSheet} from "react-native"

export default function TextField({value}){
   
  return(
  
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    backgroundColor:"#fff",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    borderBottomWidth:1
    
   
  },
  text:{
    borderColor:"black",
    borderWidth:3,
    textAlign:"center",
    
       
    }
})










































