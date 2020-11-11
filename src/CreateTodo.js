
import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native'



function CreatTodo(props) {

  const [task, setTask] = useState('');
 
    function  onPressButton() {
        console.log(task)
        console.log(props)
        props.addTodo(task)
        setTask("")
        
      }

     



  return (
    <View style={styles.inputContainer}>
        <TextInput 

    placeholder='add task...' 
    style={styles.input}
    onChangeText={(value) => setTask(value)} 
     />
        <Button
            onPress={onPressButton}
            title="Add"
          />
      
</View>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    addTodo:task => dispatch({type: 'ADD_TODO', task: task})
  }
}


export default connect(null,mapDispatchToProps)(CreatTodo)

const styles = StyleSheet.create({
  inputContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    
  },
  input:{
    backgroundColor:"white",
    paddingLeft:20,
    paddingRight:20,
    width:300,
  }
  
  
});