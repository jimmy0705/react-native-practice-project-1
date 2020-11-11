/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';

// import FixedDimensionsBasics from './src/StylePrctc'
// // import Btn from './src/Btn'
// // import Scroll from './src/ScrlView'
  import Header from './src/Header'
  import TodoItem from './src/TodoItem'

export default function App() {
 



  return (
    <View style={styles.mainContainer}>
      <Header/>
    <View style={styles.container}>
     <TodoItem/>
  
  </View>

</View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"green",
   // flexDirection:"row"
  },
  container: {
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    
    // backgroundColor: '#fff',
    // margin: 30
 
    
  
  },
  
});