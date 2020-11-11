import React from 'react'
import {StyleSheet, TouchableOpacity, Text,View,Button} from 'react-native';

import CreateTodo from './CreateTodo'
import Todo from './Todo'
import { connect } from 'react-redux'

 function TodoItem(props) {
  const {navigation} = props
  
  return (
    // <TouchableOpacity onPress={() => pressHandler(item.key)}>
    //   <Text style={styles.item}>{item.text}</Text>
    // </TouchableOpacity>
    <View>
        <Text style={styles.heading}>Todo List</Text>

        <Button
        style={styles.btn} 
        title="go to Navigation"
        onPress={() => navigation.navigate('Navigation')}
      />

        <CreateTodo/>
      <View style={{marginTop:30}}></View>
      {props.todos.length<1 ? <Text>please add your todos </Text> :  <View>
                   {props.todos.map((todo,index)=><Todo todo={todo.task} key={index} id={index}/>)}
                </View>}
        {/* <Todo/> */}

    </View>

  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}



export default connect(mapStateToProps)(TodoItem)

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
    
  },
  btn:{
    width:30,
  }
});
