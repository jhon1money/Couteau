import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function GenderScreen() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('white');

  const fetchGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
      setColor(data.gender === 'male' ? 'blue' : 'pink');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Enter a name to predict gender:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Button title="Predict Gender" onPress={fetchGender} />
      {gender ? <Text>The gender is: {gender}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
