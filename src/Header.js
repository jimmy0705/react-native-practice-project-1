import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
      <Text style={styles.title}>Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={styles.title}>navigation</Text>
      </TouchableOpacity>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display:"flex",
    height: 50,
    backgroundColor: 'coral',
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  title: {
  
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    padding:9,
    backgroundColor:"green",

  }
});



