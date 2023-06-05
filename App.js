import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userData, setUserData] = useState();
  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ userData, setUserData }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </LoginContext.Provider>
    </NavigationContainer>
  );
}
