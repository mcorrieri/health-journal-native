import { ScreenContainer, Text, Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerTitle: "Sign Up",
          }}
          name="Create Account"
          component={CreateAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
