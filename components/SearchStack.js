import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Center from "./Center";
import { Button, FlatList } from "react-native";

const Stack = createNativeStackNavigator();

function Search() {
  const [show, setShow] = useState(false);

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
    <Center>
      <Button
        title="Search Entries"
        onPress={() => {
          setShow(true);
        }}
      />
      {show ? (
        <FlatList
          data={data}
          keyExtractor={(index) => index} //fix this later
          renderItem={({ item }) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  // navigation.navigate("Entries", {
                  //   name: item,
                  // });
                }}
              />
            );
          }}
        />
      ) : null}
    </Center>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchStack;
