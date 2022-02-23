import { Text, View, TextInput, StyleSheet } from "react-native";
import React from "react";
import EntryList from "./EntryList";
import Sidebar from "./Sidebar";
import CreateEntry from "./CreateEntry";
const Home = () => {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.page}>
        <CreateEntry />
        <EntryList />
      </View>
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
  // page: {
  //   direction: "flex",
  //   flexDirection: "column",
  // },
});

export default Home;
