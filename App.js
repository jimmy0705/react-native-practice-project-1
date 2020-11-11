/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import  {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'




import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todoReducer'

//console.log(todoReducer)
const store = createStore(todoReducer);
const Stack = createStackNavigator();
//console.log(store)
  import Header from './src/Header'
  import TodoItem from './src/TodoItem'
  import NavScreen from './src/NavigationScrn'

export default function App() {
 



  return (
    <Provider store={store}>
    <View style={styles.mainContainer}>
  
    {/* <Header/> */}

 {/* <TodoItem/> */}

 <NavigationContainer>
 {/* <Header/> */}
      <Stack.Navigator initialRouteName="Todo">
        <Stack.Screen name="Todo" component={TodoItem} />
        <Stack.Screen name="Navigation" component={NavScreen} />
      </Stack.Navigator>
    </NavigationContainer>



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