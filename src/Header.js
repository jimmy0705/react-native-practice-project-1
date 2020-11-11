import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Button} from 'react-native';

export default function Header({ navigation }) {
  
  return (
    <View style={styles.header}>
     <Button
        title="Todo"
        onPress={() => navigation.navigate('Todo')}
      />

<Button
        title="Navigation"
        onPress={() => navigation.navigate('Navigation')}
      />
      
     
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



