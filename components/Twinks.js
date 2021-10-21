import React from 'react';

import { Button, TouchableOpacity, StyleSheet,Text } from 'react-native';

export default function ({ color, bgColor, text,click }) {
 return (
   <TouchableOpacity style={{...styles.container,backgroundColor:"#ff7605"}} onPress={()=>click(text)}>
      <Text style={{...styles.font,color:color}}>{text}</Text>
   </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Montserrat',
    fontSize: 30,
    backgroundColor:"orange",
    width:57,
    height:57,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:42,
    margin:7,
    marginHorizontal:12
  },
  font:{
    fontFamily: 'Montserrat',
    fontSize: 30,
  }
});
