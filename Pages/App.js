import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Homepage";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();


export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
      <StatusBar style="light" translucent />
    </NavigationContainer>
  );
}
