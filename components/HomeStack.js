import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AuthContext, AuthProvider } from "./AuthProvider";
import { FlatList } from "react-native";
import Center from "./Center";

const Stack = createNativeStackNavigator();

function Feed({ navigation }) {
  const data = [
    "Duey",
    "Mike",
    "Chrissy",
    "Nester",
    "Brian",
    "Kevvy",
    "Rick",
    "Mike b",
    "Kyle",
    "Davies",
    "Jake",
    "Franky",
    "Sil",
    "Paulie",
    "Hamburgerman",
    "Turtle",
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
                navigation.navigate("Entries", {
                  name: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
}

function Entries({ route, navigation }) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Entry"
        onPress={() => {
          navigation.navigate("EditEntry", {
            name: route.params.name,
          });
        }}
      />
    </Center>
  );
}

function EditEntry({ route }) {
  return (
    <Center>
      <Text>Editing {route.params.name}...</Text>
    </Center>
  );
}

export default function HomeStack() {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit Entry: ${route.params.name}`,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  //submit edit form
                }}
              >
                <Text style={{ color: "red", paddingRight: 5 }}>Done</Text>
              </TouchableOpacity>
            );
          },
        })}
        name="EditEntry"
        component={EditEntry}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Entry Date: ${route.params.name}`,
        })}
        name="Entries"
        component={Entries}
      />
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
                <Text style={{ color: "red" }}>Logout</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
