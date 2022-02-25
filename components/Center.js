import { View } from "react-native";
import React from "react";

export default function Center({ children }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {children}
    </View>
  );
}
