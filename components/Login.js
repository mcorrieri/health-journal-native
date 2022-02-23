import React, { useState, useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthProvider";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login();
    navigation.navigate("AppTabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TriHealth</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        style={styles.inputs}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={handleLogin} style={styles.buttonText}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </TouchableOpacity>
      <Button
        title="Go to Create Account"
        onPress={() => {
          navigation.navigate("Create Account");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
