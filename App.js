import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ShowValue from './components/ShowValue';
import data from './assets/data';
import Twinks from './components/Twinks';

export default function App() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [promptText, setPromptText] = useState('');
  //  function getText(){
  //    data.map((item,index)=>{
  //      item.map((sub,ind)=>{
  //        return <Text>boss</Text>
  //      })
  //    })
  //  }

  //  console.log(getText())

  const calculate = (text) => {
    text = String(text);
    if(value==undefined || value==null || value=="undefined"){
        setValue("0")
    }

    if (value == '0') {
      setValue('');
      setValue(text)
    } else if (text == 'C') {
      setValue('');
    } else if (text == '=') {
      console.log(value);
      try {
        let val = String(eval(value));
        console.log(eval(value));
        setValue(val);
      } catch (e) {
        setValue('');
      }
    } else {
      setValue(value + text);
    }
  };

  return (
    <View style={styles.container}>
      <ShowValue value={value} />
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#fff',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {data.map((item, index) => {
          return item.map((sub, ind) => {
            return <Twinks text={sub.name} color={'#fff'} click={calculate} />;
          });
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
