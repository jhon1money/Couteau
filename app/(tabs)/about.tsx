import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/mi_foto1.png')} style={styles.image} />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.contact}>Contact Information</Text>
      <Text style={styles.email}>Email: your-email@example.com</Text>
      <Text style={styles.phone}>Phone: +123456789</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 16,
    marginVertical: 8,
  },
  email: {
    fontSize: 14,
  },
  phone: {
    fontSize: 14,
  },
});
