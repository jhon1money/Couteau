import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Linking } from 'react-native';

export default function UniversitiesScreen() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter a country to find universities:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCountry}
        value={country}
      />
      <Button title="Search Universities" onPress={fetchUniversities} />
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.domains[0]}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(item.web_pages[0])}>
              Visit Website
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    marginBottom: 10,
  },
  link: {
    color: 'blue',
  },
});
