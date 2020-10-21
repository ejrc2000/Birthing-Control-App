import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import add_animal from './pages/add_animal'
import main from './pages/main'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Add a New Animal" component={add_animal} />
        <Stack.Screen name="Test" component={main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
