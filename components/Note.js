import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React from "react";

const Note = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feb 16</Text>
      <Text style={styles.text}>Date: Feb 15, 2022</Text>
      <Text style={styles.text}>Date: Feb 16, 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     display: "flex",
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     backgroundColor: "lightgrey",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     marginHorizontal: 20,
  //     marginBottom: 10,
  //   },
  text: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

export default Note;
