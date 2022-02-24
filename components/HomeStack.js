import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AuthContext, AuthProvider } from "./AuthProvider";
import { FlatList } from "react-native";

const Stack = createNativeStackNavigator();

function Feed({ navigation }) {
  const data = [
    "duey",
    "mike",
    "chrissy",
    "other mike",
    "bb",
    "stanky",
    "creamy",
    "acorn",
    "bba",
    "stankya",
    "creamya",
    "acorna",
    "bbc",
    "stankyc",
    "creamyc",
    "acornc",
  ];
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(index) => index} //fix this later
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Entries");
              }}
            />
          );
        }}
      />
    </View>
  );
}

function Entries() {
  return (
    <View>
      <Text>This is where entries will go</Text>
    </View>
  );
}

export default function HomeStack() {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Entries" component={Entries} />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}