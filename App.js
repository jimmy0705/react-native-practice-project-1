/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FixedDimensionsBasics from './src/StylePrctc'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Hello World!</Text>
      <FixedDimensionsBasics/>
      <Text style={{color:"yellow"}}>yooooooooo!!!!</Text>
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