import { Text, View, TextInput, StyleSheet } from "react-native";
import React from "react";
import NoteList from "./NoteList";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <View style={styles.container}>
      <Sidebar />
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
});

export default Home;
