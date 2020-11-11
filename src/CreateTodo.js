
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';



export default function CreatTodo() {

    const [text, setText] = useState('');
 
    function  onPressButton() {
        alert('You tapped the  Add button!')
      }


  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.input} ></TextInput>
        <Button
            onPress={onPressButton}
            title="Add"
          />
      
</View>
  );
}

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