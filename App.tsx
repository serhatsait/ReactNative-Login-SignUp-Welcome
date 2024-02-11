import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "./src/components/Welcome/Welcome.tsx";
import Login from "./src/components/Login/Login.tsx";
import Signup from "./src/components/Signup/Signup.tsx";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} options={
          { headerShown: false }
        } />
        <Stack.Screen name="Login" component={Login} options={
          { headerShown: false }
        } />
        <Stack.Screen name="Signup" component={Signup} options={
          { headerShown: false }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
