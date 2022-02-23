import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tabs = createBottomTabNavigator();

function Search() {
  <Text>Search</Text>;
}

export default function AppTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
}
