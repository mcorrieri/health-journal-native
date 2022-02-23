import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import CreateEntry from "./components/CreateEntry";
import { Routes } from "./components/Routes";
import { AuthProvider } from "./components/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
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
