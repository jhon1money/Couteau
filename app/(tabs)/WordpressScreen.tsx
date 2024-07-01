import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

// Componente funcional para la pantalla de WordPress
const WordpressScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchWordpressPosts();
  }, []);

  // Función para obtener las últimas noticias de WordPress
  const fetchWordpressPosts = async () => {
    try {
      const response = await fetch('https://your-wordpress-site/wp-json/wp/v2/posts?per_page=3');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
    }
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../assets/images/wordpress-logo.png')} // Ajusta la ruta de la imagen según tu ubicación
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        {posts.map(post => (
          <TouchableOpacity
            key={post.id}
            onPress={() => Linking.openURL(post.link)} // Abre el enlace del post al ser presionado
            style={{ marginBottom: 20, borderBottomWidth: 1, paddingBottom: 10, borderColor: '#ccc' }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{post.title.rendered}</Text>
            <Text>{post.excerpt.rendered.replace(/<[^>]*>?/gm, '')}</Text>
            <Text style={{ color: 'blue', marginTop: 5 }}>Leer más</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default WordpressScreen;
