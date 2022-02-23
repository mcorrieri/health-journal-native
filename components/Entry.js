import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React from "react";

const Entry = ({ entry }) => {
  const { id, date, description } = entry;
  console.log(entry);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    fontWeight: "bold",
  },
});

export default Entry;
