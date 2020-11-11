/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todoReducer'

//console.log(todoReducer)
const store = createStore(todoReducer);

//console.log(store)
  import Header from './src/Header'
  import TodoItem from './src/TodoItem'

export default function App() {
 



  return (
    <Provider store={store}>
        <View style={styles.mainContainer}>
      <Header/>
    <View style={styles.container}>
     <TodoItem/>
  
  </View>

</View>
    </Provider>
 
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