import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Login from "./components/Login";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />

      <Home />

      {/* <Image
        source={{
          uri: "http://images2.fanpop.com/image/polls/368000/368421_1264863810256_full.jpg?v=1264863819",
        }}
        style={styles.logo}
      /> */}
      {/* <Text style={styles.instruction}>Yeah I've got a weight problem</Text> */}

      {/* <TouchableOpacity
        onPress={() => alert("Yeah, I've got a weight problem")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Melvin do you have a problem?</Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
}

// const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  instruction: {
    marginHorizontal: 20,
    color: "blue",
    fontSize: 18,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
