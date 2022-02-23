import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { AuthContext, AuthProvider } from "./AuthProvider";
const Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.page}>
        <Button title="logout" onPress={() => logout()} />
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
