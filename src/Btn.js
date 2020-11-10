import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Btn = (props) => {
   
  function  onPressButton() {
        //alert('You tapped the button!')
        props.setName("yoooo")
      }

    return (
      <View >
            <Button
            style={{marginTop:30}}
            onPress={onPressButton}
            title="Press Me"
          />
      </View>
    );
};

export default Btn;