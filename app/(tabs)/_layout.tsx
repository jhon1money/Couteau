import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderScreen from './gender';
import AgeScreen from './age';
import UniversitiesScreen from './universities';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gender" component={GenderScreen} />
      <Tab.Screen name="Age" component={AgeScreen} />
      <Tab.Screen name="Universities" component={UniversitiesScreen} />
    </Tab.Navigator>
  );
}
