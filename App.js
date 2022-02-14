import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Login from "./components/Login";
import Home from "./components/Home";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   instruction: {
//     marginHorizontal: 20,
//     color: "blue",
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "#fff",
//   },
// });
