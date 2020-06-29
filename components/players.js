import React, { useState } from 'react';
import { AsyncStorage, StyleSheet, View, TextInput, Button } from 'react-native';

export default function Players({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (input) => {   
    setText(input);
  };

  const pressHandler = () => {
    const team1 = text.split("\n");
    const team2 = [];
    const split = Math.floor(team1.length/2);

    for (let i=0; i<split; i++) {
      const index = Math.floor(Math.random() * team1.length);

      team2.push(team1[index]);
      team1.splice(index, 1);
    }

    submitHandler(team1.join(" "), team2.join(" "));
  };

  return (
    <View>
      <TextInput
        multiline={true}
        onChangeText={changeHandler}
        placeholder='Enter players...'
        style={styles.input}
        value={text} 
      />
      <Button color='indigo' onPress={pressHandler} title='Generate Teams' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#bbb',
    paddingTop: 10,
    paddingBottom: 100,
    paddingLeft: 10,
    paddingRight: 30,
  },
});
