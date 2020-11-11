
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';



export default function Todo() {

   
 
    function  onPressDelete() {
        alert('You tapped the  delete button!')
      }


  return (
    <View style={styles.todoContainer}>
        <Text style={styles.todo} >hjgijrgijirgj jfjhgjijgi</Text>
        <Button
            style={styles.del}
            onPress={onPressDelete}
            title="X"
          />
      
</View>
  );
}

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