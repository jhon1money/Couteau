import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function AgeScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [category, setCategory] = useState('');

  const fetchAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
      if (data.age < 18) {
        setCategory('young');
      } else if (data.age < 60) {
        setCategory('adult');
      } else {
        setCategory('elderly');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter a name to determine age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Button title="Determine Age" onPress={fetchAge} />
      {age !== null && (
        <View>
          <Text>The age is: {age}</Text>
          <Text>Category: {category}</Text>
          <Image source={getCategoryImage(category)} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const getCategoryImage = (category) => {
  switch (category) {
    case 'young':
      return require('../../assets/images/mi_foto1.png');
    case 'adult':
      return require('../../assets/images/adult.jpg');
    case 'elderly':
      return require('../../assets/images/elderly.jpg');
    default:
      return null;
  }
};

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
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
