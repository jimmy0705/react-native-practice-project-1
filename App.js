/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';

import FixedDimensionsBasics from './src/StylePrctc'
import Btn from './src/Btn'

export default function App() {
 
  const [name , setName] = useState("jimmy")

  function clickHandler(){
    setName("Juned")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Hello World!</Text>
      <FixedDimensionsBasics/>
  <Text style={{color:"yellow",fontSize:30,marginTop:20}}>my name is {name}</Text>
      <Btn setName={setName}/>
      <Button title="update state" onPress={clickHandler}/>

      <View>
        <TextInput>

        </TextInput>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    margin: 30
 
    
  
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});