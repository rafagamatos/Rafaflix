import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Movie from "./src/pages/Movie/";
import New from "./src/pages/NewMovie/";
import Details from "./src/pages/Details/";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "#F92E6A",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
        <Stack.Screen
          name="New"
          component={New}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
