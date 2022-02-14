import { Text, View, TextInput, StyleSheet } from "react-native";
import React from "react";
import NoteList from "./NoteList";

const Home = () => {
  return (
    <View style={styles.container}>
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
