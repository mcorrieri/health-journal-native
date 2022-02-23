import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import { ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";
import AppTabs from "./AppTabs";
import Home from "./Home";

export const Routes = () => {
  const { user, login } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loading} color="#0000ff" size="large" />
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            options={{
              headerTitle: "Sign Up",
            }}
            name="Create Account"
            component={CreateAccount}
          />
          <Stack.Screen name="AppTabs" component={AppTabs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
