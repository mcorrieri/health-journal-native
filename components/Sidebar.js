import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

export default function Sidebar({ navigation }) {
  const handleEdit = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Hi Duey!</Text>
      <TouchableOpacity style={styles.account}>
        <Pressable onPress={handleEdit}>
          <Text>Edit Account</Text>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 5,
    // flex: 1,
    flexDirection: "column",
    marginVertical: 10,
  },
  account: {
    flex: 1,
    alignContent: "flex-end",
  },
  user: {
    fontSize: 22,
  },
});
