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
  const [show , setShow] = useState(false)
  const [age, setAge] = useState('30');

  function clickHandler(){
    setName("Juned")
  }

  function showHandler(){
    setShow(!show)
  }


  return (
    <View style={styles.container}>
       {/* <Button title="show/hide fixed height" onPress={showHandler}/>
     {show ?  <FixedDimensionsBasics/> : <Text></Text>}
  <Text style={{color:"black",fontSize:30,marginTop:20}}>my name is {name}</Text>
      <Btn setName={setName}/>
      <Button title="update state" onPress={clickHandler}/> */}

      <Text>Enter name:</Text>
      <TextInput 
        placeholder='enter Name...' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='enter Age...' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.result}>name: {name}, age: {age}</Text>

   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
    backgroundColor: '#fff',
    margin: 30
 
    
  
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
   input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});