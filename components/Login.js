import React, { Component, useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <View>
      <Text style={styles.text}>TriHealth</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput style={styles.inputs} placeholder="Password"></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    width: 240,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "lightblue",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    width: 70,
    marginLeft: 100,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
