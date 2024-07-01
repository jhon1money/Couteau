import React from 'react';
import { NavigationContainer } from 'expo-router'; // Ajusta según el nombre correcto del paquete de navegación
import { createStackNavigator } from '@react-navigation/stack'; // Ajusta según el nombre correcto del paquete de navegación

// Importa los componentes de las pestañas (tabs)
import AgeScreen from '../tabs/age';
import GenderScreen from '../tabs/gender';
import UniversitiesScreen from '../tabs/universities';
import WeatherScreen from '../tabs/weather';
import WordpressScreen from '../tabs/wordpress';
import AboutScreen from '../tabs/about';

// Configura la navegación stack
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Age"> {/* Ajusta la ruta inicial según tu necesidad */}
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Universities" component={UniversitiesScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Wordpress" component={WordpressScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
