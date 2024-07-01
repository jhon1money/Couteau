import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherScreen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=18.735693&longitude=-70.162651&current_weather=true');
      const data = await response.json();
      setWeather(data.current_weather);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {weather ? (
        <View>
          <Text>Temperature: {weather.temperature}°C</Text>
          <Text>Weather: {weather.weathercode}</Text>
        </View>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

