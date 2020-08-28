import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./App/navigation/AuthNavigator";
import navigationTheme from "./App/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
