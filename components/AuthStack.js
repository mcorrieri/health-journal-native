import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import AppTabs from "./AppTabs";

export default function AuthStack() {
  const { user, login } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Login"
    >
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
  );
}
