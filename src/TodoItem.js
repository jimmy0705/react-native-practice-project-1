import React from 'react'
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';

import CreateTodo from './CreateTodo'
import Todo from './Todo'

export default function TodoItem() {

  
  return (
    // <TouchableOpacity onPress={() => pressHandler(item.key)}>
    //   <Text style={styles.item}>{item.text}</Text>
    // </TouchableOpacity>
    <View>
        <Text style={styles.heading}>Todo List</Text>

        <CreateTodo/>
      <View style={{marginTop:30}}></View>
        <Todo/>

    </View>

  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    
    borderRadius: 1,
    borderRadius: 10,
  },
  heading:{
    color:"black",
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold"
    
  }
});
