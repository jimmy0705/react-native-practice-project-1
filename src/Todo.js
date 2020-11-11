
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux"



  function Todo(props) {

   
 
    function  onPressDelete() {
      props.deleteTodo(props.id)
      }


  return (
    <View style={styles.todoContainer}>
        <Text style={styles.todo} >{props.todo}</Text>
        <Button
            style={styles.del}
            onPress={onPressDelete}
            title="X"
          />
      
</View>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo:id => dispatch({type: 'DELETE_TODO', id: id})
  }
}


export default connect(null,mapDispatchToProps)(Todo)



const styles = StyleSheet.create({
  todoContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    
  },
  todo:{
    backgroundColor:"white",
    
   
  },
  del:{
      marginLeft:6,
  }
  
  
});