import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeStack from "./HomeStack";

const Tabs = createBottomTabNavigator();

function Search() {
  return (
    <View style={styles.center}>
      <Text>Search</Text>
    </View>
  );
}

export default function AppTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeStack}
      />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
