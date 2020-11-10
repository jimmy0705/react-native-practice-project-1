import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';

export default function Scroll(props) {
    
    const {people} = props
    console.log(people)
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' },
//     { name: 'bowser', id: '8' },
//   ]);

  return (
    <View style={styles.container2}>

      {/* <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      /> */}
      {people.map((item)=>{
             <Text style={styles.item}>{item.name}</Text>
      })}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});